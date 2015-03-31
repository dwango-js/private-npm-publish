// LICENSE : MIT
"use strict";
var assert = require("assert");
/**
 * validate pkg object if scoped module or not.
 * @param {object} pkg
 * @return {Error[]} if found errors, then return Error**s**.
 */
function validateScopedPackage(pkg) {
    assert(pkg, "package.json is not found");
    var errors = [];
    var name = pkg.name;
    if (name == null || name.length == 0) {
        errors.push(new Error("package name is not defined"));
    }
    // validate - start with `@`
    var scopedModuleNameRegExp = /^@/;
    if (!scopedModuleNameRegExp.test(name)) {
        errors.push(new Error(`The package name has to start with "@": ${name}
e.g.) @myorg/mypackage
More info about scoped packages : https://docs.npmjs.com/misc/scope`));
    }
    // if `errors.length === 0` is valid scoped module!
    return errors;
}

module.exports = {
    validateScopedPackage
};