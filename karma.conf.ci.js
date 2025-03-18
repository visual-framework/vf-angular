const baseConfig = require('./karma.conf.js');

module.exports = function(config) {
  baseConfig(config);
  
  config.set({
    // Override base configuration for CI
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    singleRun: true,
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-junit-reporter'),
      require('karma-sonarqube-unit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    reporters: ['progress', 'junit', 'coverage', 'sonarqube'],
    junitReporter: {
      outputDir: 'reports/junit',
      outputFile: 'test-results.xml',
      useBrowserName: false,
      nameFormatter: undefined,
      classNameFormatter: undefined,
      properties: {}
    },
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'lcov', subdir: 'lcov' },
        { type: 'text-summary' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.xml' }
      ]
    },
    sonarqubeReporter: {
      outputFile: 'reports/sonarqube/report.xml',
      useBrowserName: false
    }
  });
};
