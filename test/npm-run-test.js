// LICENSE : MIT
"use strict";
var assert = require("power-assert");
var npmRun = require("../").npmRun;
describe("npm-run-test", function () {
    describe("npmRunAsync", function () {
        it("should run 'npm version' command", function (done) {
            return npmRun.npmRunAsync("version").then(function(data){
                done();
            }, function(error){
                done(new Error("should not call"));
            });
        });
    });
});