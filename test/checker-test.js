// LICENSE : MIT
"use strict";
var assert = require("power-assert");
var checker = require("../").checker;
describe("checker-test", function () {
    var pkg = {};
    describe("validateScopedPackage", function () {
        context("when package name start with @", function () {
            beforeEach(function () {
                pkg = {
                    name: "@private/module"
                };
            });
            it("should return true", function () {
                assert(checker.validateScopedPackage(pkg));
            });
        });
    });
});