var path = require('path');


// Karma configuration
// Generated on Thu Feb 02 2017 18:33:53 GMT+0800 (Malay Peninsula Standard Time)

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
      'src/tests/index.js',
    ],
    // list of files to exclude
    exclude: [
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/tests/index.js': ['webpack', 'sourcemap'],
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['verbose'],
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
    browsers: ['PhantomJS'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    //webpack configuration option
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      module:{
        preLoaders: [
          {
            test: /\.test\.jsx?$/,
            exclude: [/native/,/\.rn\.js$/],
            loaders: ['react-hot', 'babel?cacheDirectory=true'],
            include: path.join(__dirname, 'src'),
          },
          {
            test: /\.jsx?$/,
            exclude: [/native/,/\.rn\.js$/, /tests/],
            loaders: ['react-hot', 'babel-istanbul?cacheDirectory=true'],
            include: path.join(__dirname, 'src'),
          }
        ],
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: [/native/,/\.rn\.js$/, /tests/],
            loaders: ['react-hot', 'babel?cacheDirectory=true'],
            include: path.join(__dirname, 'src'),
          }
        ],
      }
    }, 
    webpackMiddleware: {
      noInfo: true
    },
    client: {
      // log console output in our test console
      captureConsole: true
    },
    // Webpack takes a little while to compile -- this manifests as a really
    // long load time while webpack blocks on serving the request.
    browserNoActivityTimeout: 60000, // 60 seconds
  })
}
