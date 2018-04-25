"use strict";
//export function makeObservable() {
//  let observers = new Array();
//  return {
//    observers: observers,
//    nextValue: function(val) {
//      observers.forEach((obs) => obs(val));
//    }
//  } 
//}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Observable = /** @class */ (function (_super) {
    __extends(Observable, _super);
    function Observable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nextValue = function (val) { return _this.forEach(function (obs) { return obs(val); }); };
        return _this;
    }
    return Observable;
}(Array));
exports.Observable = Observable;
