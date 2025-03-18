const gulp = require('gulp');
const { exec } = require('child_process');
const shell = require('gulp-shell');

// Helper function to run Angular CLI commands
function runNgTest(options = []) {
  return new Promise((resolve, reject) => {
    const command = `ng test ${options.join(' ')}`;
    const child = exec(command);

    child.stdout.on('data', (data) => {
      process.stdout.write(data);
    });

    child.stderr.on('data', (data) => {
      process.stderr.write(data);
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`ng test failed with code ${code}`));
      }
    });
  });
}

// Task to run all tests in CI mode
gulp.task('test:ci', async () => {
  try {
    await runNgTest([
      '--no-watch',
      '--browsers=ChromeHeadless',
      '--code-coverage',
      '--source-map=true',
      '--progress=false',
      '--reporters=junit,coverage',
      '--karma-config=karma.conf.ci.js'
    ]);
  } catch (error) {
    console.error('CI Test execution failed:', error);
    process.exit(1); // Ensure pipeline fails on test errors
  }
});

// Task to run all tests including VF components
gulp.task('test:all', async () => {
  try {
    await runNgTest([
      '--watch=false',
      '--browsers=ChromeHeadless',
      '--code-coverage',
      '--source-map=true'
    ]);
  } catch (error) {
    console.error('Test execution failed:', error);
    throw error;
  }
});

// Task to run tests for a specific VF component
gulp.task('test:vf-component', async () => {
  const componentArg = process.argv.find(arg => arg.startsWith('--component='));
  if (!componentArg) {
    throw new Error('Please specify a component: gulp test:vf-component --component=vf-badge');
  }

  const componentName = componentArg.split('=')[1];
  const testFile = `node_modules/@visual-framework/${componentName}/${componentName}.angular/**/*.spec.ts`;

  try {
    await runNgTest([
      '--no-watch',
      '--browsers=ChromeHeadless',
      `--include=${testFile}`
    ]);
  } catch (error) {
    console.error('Test execution failed:', error);
    throw error;
  }
});

// Task to run tests in watch mode (development only)
gulp.task('test:watch', async () => {
  try {
    await runNgTest(['--browsers=Chrome']);
  } catch (error) {
    console.error('Test execution failed:', error);
    throw error;
  }
});

// Watch folders for changes
gulp.task('watch', shell.task([
  'ng build --watch --configuration development'
]));

// run ng in build mode
gulp.task('build', shell.task([
  'ng build'
]));

// run ng in dev mode
gulp.task('dev', shell.task([
  'ng serve'
]));

// Just build the assets, CSS and JS for VF components
gulp.task('build-vf-assets', gulp.series(
  'build'
));

// Build and watch things during dev
gulp.task('dev', gulp.series(
  gulp.parallel('dev', 'watch')
));
