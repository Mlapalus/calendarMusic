// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const path = require("path");

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
      require("karma-coverage-istanbul-reporter"),
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    coverageIstanbulReporter: {
      reports: ["html", "lcovonly", "text-summary"],
      dir: path.join(__dirname, "coverage"),
      combineBrowserReports: true,
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true,
      "report-config": {
        html: {
          subdir: "html",
        },
      },
    },
    thresholds: {
      emitWarning: false,
      global: {
        statements: 100,
        lines: 100,
        branches: 100,
        functions: 100,
      },
      each: {
        statements: 100,
        lines: 100,
        branches: 100,
      },
    },
    verbose: true,
    reporters: ["progress", "kjhtml", "coverage-istanbul"],
    browsers: ["Chrome"],
    restartOnFileChange: true,
  });
};
