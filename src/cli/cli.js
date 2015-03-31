// LICENSE : MIT
"use strict";
var options = require("./options");
var npmRunAsync = require("../npm-run").npmRunAsync;
var Promise = require("bluebird");
var checker = require("../checker");
var path = require("path");
var fs = require("fs");
var cli = {
    /**
     * Executes the CLI based on an array of arguments that is passed in.
     * @param {string|Array|Object} args The arguments to process.
     * @returns {Promise} The promise for the operation.
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
            var errors = checker.validateScopedPackage(pkg);
            // not found error -> npm publish
            if (errors.length > 0) {
                return reject(errors.join("\n"));
            }
            return npmRunAsync("publish", []);
        });
    }
};
module.exports = cli;