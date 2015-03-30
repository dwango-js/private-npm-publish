// LICENSE : MIT
"use strict";
var which = require("which");
var Promise = require("bluebird");
var npm = require("npm");
/**
 * load `npm` config
 * @returns {*}
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
 * @param {string[]} argv
 * http://nodejs.jp/nodejs.org_ja/api/child_process.html#child_process_child_process_spawn_command_args_options
 * @return {Promise}
 */
function npmRun(command, argv = []) {
    return loadNpmAsync().then(function () {
        return new Promise((resolve, reject)=> {
            npm.commands[command](argv, function (er, data) {
                if (er) {
                    reject(er);
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
    npmRun
};