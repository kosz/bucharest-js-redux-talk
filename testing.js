"use strict";
exports.__esModule = true;
var colors = require("colors/safe");
function describe(subject, block) {
    console.log('the', subject);
    block();
}
exports.describe = describe;
function it(description, block) {
    var result = "" + description;
    try {
        block();
        result = result + (" " + colors.green('√'));
    }
    catch (e) {
        result = result + (" " + colors.red('x') + " -> " + e.message);
    }
    console.log(result);
}
exports.it = it;
function expect(actualValue) {
    return {
        toEqual: function (expectedValue) {
            if (actualValue !== expectedValue) {
                throw new Error(actualValue + " does not equal " + expectedValue);
            }
        },
        toBeDefined: function () {
            if (actualValue === undefined) {
                throw new Error("should be defined");
            }
        }
    };
}
exports.expect = expect;
