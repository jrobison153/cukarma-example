// Karma configuration
// Generated on Mon Jun 15 2015 18:36:17 GMT-0400 (Eastern Daylight Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['requirejs', 'cucumberjs'],


        // list of files / patterns to load in the browser
        files: [
            'test-main.js',
            {pattern: 'src/app/**/*.js', included: false},
            {
                pattern: 'node_modules/karma-cucumberjs/vendor/cucumber-html.css', watched: false,
                included: false, served: true
            },
            {pattern: 'src/test/app.template', watched: false, included: false, served: true},
            {pattern: 'src/features/**/*.feature', watched: true, included: false, served: true},
            {pattern: 'src/test/**/*-test.js', watched: true, included: false, served: true}
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
