// LICENSE : MIT
"use strict";
var options = require("./options");
var npmRun = require("../npm-run").npmRun;
var Promise = require("bluebird");
var checker = require("../check-private");
var path = require("path");
var fs = require("fs");
var cli = {
    /**
     * Executes the CLI based on an array of arguments that is passed in.
     * @param {string|Array|Object} args The arguments to process.
     * @returns {Promise} The exit code for the operation.
     */
    executeAsync: function (args) {
        return new Promise(function (resolve, reject) {
            var currentOptions = options.parse(args);
            if (currentOptions.version) { // version from package.json
                console.log("v" + require("../../package.json").version);
                return resolve();
            } else if (currentOptions.help) {
                console.log(options.generateHelp());
                return resolve();
            }
            var packageJSONPath = path.join(process.cwd(), "package.json");
            var pkg = JSON.parse(fs.readFileSync(packageJSONPath));
            var error = checker.validateScopedPackage(pkg);
            // not found error -> npm publish
            if (error) {
                reject(error);
                return;
            }
            return npmRun("publish", []);
        });
    }
};
module.exports = cli;