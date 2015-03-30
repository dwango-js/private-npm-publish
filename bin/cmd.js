#!/usr/bin/env node
var cli = require("../lib/cli/cli");
cli.executeAsync(process.argv).then(function () {
    console.log("done");
}).catch(function (error) {
    console.error(error);
    process.exit(1);
});