const baseConfig = require('./karma.conf.js');

module.exports = function(config) {
  baseConfig(config);
  
  config.set({
    // Override base configuration for CI
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    singleRun: true,
    client: {
      clearContext: false,
      jasmine: {
        failFast: true
      }
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-junit-reporter'),
      require('karma-spec-reporter'),
      require('karma-sonarqube-unit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    reporters: ['spec', 'junit', 'coverage'],
    
    // Detailed spec reporter configuration
    specReporter: {
      maxLogLines: 5,             // limit number of lines logged per test
      suppressErrorSummary: false, // print error summary
      suppressFailed: false,       // print information about failed tests
      suppressPassed: false,       // print information about passed tests
      suppressSkipped: false,      // print information about skipped tests
      showSpecTiming: true,       // print the time elapsed for each spec
      failFast: false             // test would finish with error when a first fail occurs
    },

    // JUnit reporter configuration
    junitReporter: {
      outputDir: 'reports/junit',
      outputFile: 'test-results.xml',
      useBrowserName: false,
      classNameFormatter: (browser, result) => {
        return result.suite.join(' › ');
      },
      nameFormatter: (browser, result) => {
        return result.description;
      },
      properties: {}
    },

    // Coverage reporter configuration
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' },
        { type: 'text-summary' },
        { type: 'json-summary', subdir: '.', file: 'coverage-summary.json' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.xml' }
      ],
      check: {
        global: {
          statements: 75,
          branches: 75,
          functions: 50,
          lines: 75
        }
      }
    },
    // Add configuration for SonarQube reporter
    sonarQubeUnitReporter: {
      sonarQubeVersion: 'LATEST',
      outputFile: 'reports/ut_report.xml',
      useBrowserName: false,
      testPaths: ['./src'],
      testFilePattern: '.spec.ts',
      overrideTestDescription: true,
      // Add this to prevent null reference errors
      testExecutions: {}
    },
    // Prevent disconnect on slow tests
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 60000,
    captureTimeout: 60000
  });
};
