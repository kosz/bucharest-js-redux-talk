"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var INITIAL_STATE = {
    nr: 0
};
function counterReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case 'INCREMENT':
            return {
                nr: state.nr + 1
            };
        case 'DECREMENT':
            return __assign({}, state, { nr: state.nr - 1 });
        default:
            return state;
    }
}
exports.counterReducer = counterReducer;
