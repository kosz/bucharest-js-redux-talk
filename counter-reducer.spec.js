"use strict";
exports.__esModule = true;
var testing_1 = require("./testing");
var counter_reducer_1 = require("./counter-reducer");
testing_1.describe('counter reducer', function () {
    testing_1.it('has a value of 0 by default', function () {
        var state = counter_reducer_1.counterReducer(undefined, { type: new Date() });
        testing_1.expect(state.nr).toEqual(0);
    });
    testing_1.it('increments 1 when the INCREMENT action is received', function () {
        var state = counter_reducer_1.counterReducer(undefined, { type: 'asdf' });
        var newState = counter_reducer_1.counterReducer(state, { type: 'INCREMENT' });
        testing_1.expect(newState.nr).toEqual(1);
    });
    testing_1.it('increments 2 when the DECREMENT action is received', function () {
        var state = counter_reducer_1.counterReducer(undefined, { type: 'asdf' });
        var newState = counter_reducer_1.counterReducer(state, { type: 'DECREMENT' });
        testing_1.expect(newState.nr).toEqual(-1);
    });
});
