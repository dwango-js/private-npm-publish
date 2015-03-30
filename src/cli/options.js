// LICENSE : MIT
"use strict";
var optionator = require("optionator");
module.exports = optionator({
    prepend: "private-npm-publish",
    concatRepeatedArrays: true,
    mergeRepeatedObjects: true,
    options: [
        {
            option: "help",
            alias: "h",
            type: "Boolean",
            description: "Show help."
        },
        {
            option: "version",
            alias: "v",
            type: "Boolean",
            description: "Outputs the version number"
        }
    ]
});
