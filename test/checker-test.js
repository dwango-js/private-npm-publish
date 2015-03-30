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
            it("should return empty array - No Error!", function () {
                var errors = checker.validateScopedPackage(pkg);
                assert(errors.length === 0);
            });
        });
        context("when package name is undefined", function () {
            beforeEach(function () {
                pkg = {};
            });
            it("should return [error] - has package.name error", function () {
                var errors = checker.validateScopedPackage(pkg);
                assert(errors.length >= 1);// will other errors contain
            });
        });
        context("when package name is not start with @", function () {
            beforeEach(function () {
                pkg = {
                    name: "normal-package"
                };
            });
            it("should return [error] - has package.name error", function () {
                var errors = checker.validateScopedPackage(pkg);
                assert(errors.length === 1);
            });
        });
    });
});
