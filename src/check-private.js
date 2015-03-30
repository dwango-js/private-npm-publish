// LICENSE : MIT
"use strict";
var assert = require("assert");
/**
 * validate pkg object if scoped module or not.
 * @param {object} pkg
 * @return {Error|null} if found error, then return Error.
 */
function validateScopedPackage(pkg) {
    assert(pkg, "package.json is not found");
    var name = pkg.name;
    if (name == null || name.length == 0) {
        return new Error("package name is not defined");
    }
    // validate - start with `@`
    var scopedModuleNameRegExp = /^@/;
    if (!scopedModuleNameRegExp.test(name)) {
        return new Error(`package name have to start with "@": ${name}
Scoped packages : https://docs.npmjs.com/misc/scope`);
    }
    // this `pkg` is scoped module!
    return null;
}

module.exports = {
    validateScopedPackage
};