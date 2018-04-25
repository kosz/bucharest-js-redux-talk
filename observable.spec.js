"use strict";
exports.__esModule = true;
var testing_1 = require("./testing");
var observable_1 = require("./observable");
testing_1.describe('observable', function () {
    testing_1.it('can keep a list of observer functions', function () {
        var observable = new observable_1.Observable();
        observable.push(function () { });
        testing_1.expect(observable.length).toEqual(1);
    });
    testing_1.it('will notify all observers if state changes', function () {
        var observable = new observable_1.Observable();
        var observerOneSpyValue;
        var observerTwoSpyValue;
        function observerOne(val) {
            observerOneSpyValue = val;
        }
        function observerTwo(val) {
            observerTwoSpyValue = val;
        }
        observable.push(observerOne);
        observable.push(observerTwo);
        observable.nextValue('Hello World');
        testing_1.expect(observerOneSpyValue).toEqual('Hello World');
        testing_1.expect(observerTwoSpyValue).toEqual('Hello World');
    });
});
