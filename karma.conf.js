// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-spec-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-sonarqube-unit-reporter')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        { type: 'lcov', subdir: 'lcov' }
      ],
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 50,
          lines: 80
        }
      }
    },
    sonarQubeUnitReporter: {
      sonarQubeVersion: 'LATEST',
      outputFile: 'reports/ut_report.xml',
      useBrowserName: false,
      testPaths: ['./src'],
      testFilePattern: '.spec.ts',
      overrideTestDescription: true
    },
    // Ensure all source files are included
    includeAllSources: true,
    // Add coverage preprocessor for all source files
    preprocessors: {
      'src/**/!(*spec|*mock).ts': ['coverage']
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    reporters: ['progress', 'kjhtml', 'coverage', 'spec', 'sonarqubeUnit'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: true
  });
};

