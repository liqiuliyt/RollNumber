"use strict";

var _chai = require("chai");

var _Picknumber = _interopRequireDefault(require("./Picknumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// let start = document.getElementById('start');
var pickOptions = {
  'min': 60,
  'max': 80,
  'count': 2,
  'maxTimes': 10
};
var picknumber = new _Picknumber.default(pickOptions);
describe('picknumber', function () {
  it('pick', function () {
    for (var i; i < picknumber.pick().length; i++) {
      _chai.assert.equal(_typeof(picknumber.pick()[i]), 'number');
    } // assert.equal(picknumber.pick(), '7');

  });
  it('reset', function () {
    (0, _chai.assert)(picknumber.reset());
  });
});

//# sourceMappingURL=Picknumber.spec.js.map