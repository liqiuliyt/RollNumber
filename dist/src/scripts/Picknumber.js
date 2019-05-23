"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import { match } from "../../../../../Library/Caches/typescript/3.4.3/node_modules/@types/minimatch";

/**
 * 选择不重复数据
 * @min :number 变化数字的最小值 (默认值为0)
 * @max :number 变化数字的最大值 (默认值为100)
 * @count :number 提取多少个不重复的数字 (默认值为2)
 * @maxTimes :number 最多提取多少次数 (默认值为100) 
 * @_num :number pick次数  
 * @_allarray :array min-max范围内的所有数据
 */
var PickNumber =
/*#__PURE__*/
function () {
  function PickNumber(option) {
    _classCallCheck(this, PickNumber);

    this.defaults = {
      'min': 0,
      'max': 100,
      'count': 2,
      'maxTimes': 100
    };
    this.options = Object.assign(this.defaults, option);
    this.min = this.options.min;
    this.max = this.options.max;
    this.count = this.options.count;
    this.maxTimes = this.options.maxTimes;
    this._num = 1;
    this._allarray = [];
  }
  /**
   * 选择出count个不重复数据（min-max范围内）
   */


  _createClass(PickNumber, [{
    key: "pick",
    value: function pick() {
      if (this._num === 1) {
        for (var i = this.min; i <= this.max; i++) {
          this._allarray.push(i);
        }
      }

      if (this._num <= this.maxTimes) {
        this._num++;
        return this.getPickNumber();
      }

      return null;
    } // 选择数据并对已选数据进行过滤

  }, {
    key: "getPickNumber",
    value: function getPickNumber() {
      var _this = this;

      var picknumber = [];

      if (this._allarray.length >= this.count) {
        for (var j = 0; j < this.count; j++) {
          picknumber.push(this._allarray[Math.floor(Math.random() * this._allarray.length)]);

          this._allarray.forEach(function (item, index) {
            picknumber.map(function (element) {
              if (item == element) {
                _this._allarray.splice(index, 1);
              }
            });
          });
        }

        return picknumber;
      }

      return null;
    }
    /**
     * 重置
     * 数据恢复至初始状态
     */

  }, {
    key: "reset",
    value: function reset() {
      this._allarray = [];
      this._num = 1;
      this.options = this.defaults;
      this.min = this.options.min;
      this.max = this.options.max;
      this.count = this.options.count;
      this.maxTimes = this.options.maxTimes;
      return true;
    }
  }]);

  return PickNumber;
}();

var _default = PickNumber;
exports.default = _default;

//# sourceMappingURL=Picknumber.js.map