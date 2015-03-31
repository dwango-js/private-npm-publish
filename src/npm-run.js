// LICENSE : MIT
"use strict";
var which = require("which");
var Promise = require("bluebird");
var npm = require("npm");
/**
 * load `npm` config
 * @returns {Promise} the promise was filled when have finished load npm config.
 */
function loadNpmAsync() {
    return new Promise((resolve, reject)=> {
        npm.load(function (err, npm) {
            if (err) {
                reject(err);
            } else {
                resolve(npm);
            }
        });
    });
}
/**
 * execute npm <command>
 * the command is like "publish".
 * @param {string} command the command is like "install"
 * @param {string[]} argv te
 * http://nodejs.jp/nodejs.org_ja/api/child_process.html#child_process_child_process_spawn_command_args_options
 * @return {Promise}
 */
function npmRunAsync(command, argv = []) {
    return loadNpmAsync().then(function () {
        return new Promise((resolve, reject)=> {
            npm.commands[command](argv, function (error, data) {
                if (error) {
                    return reject(error);
                }
                resolve(data);
            });
            npm.registry.log.on("log", function (message) {
                console.log(message);
            });
        });
    });
}
module.exports = {
    loadNpmAsync,
    npmRunAsync
};