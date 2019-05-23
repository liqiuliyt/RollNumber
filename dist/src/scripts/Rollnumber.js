"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 数据滚动
 * @el   dom对象， 轮播数字显示在该对象中 (必传）
 * @min :number 变化数字的最小值 (默认值为0)
 * @max :number 变化数字的最大值 (默认值为100)
 * @default :number 默认初始值 (0)
 * @autostart  :boolean 是否自动播放( 默认值为false:不自动播放）
 * @interval  :number  播放速度 （默认值为100）
 */
var RollNumber =
/*#__PURE__*/
function () {
  function RollNumber(option) {
    _classCallCheck(this, RollNumber);

    this.defaults = {
      'min': 0,
      'max': 100,
      'autostart': false,
      'interval': 100,
      'default': 0
    };
    this.options = Object.assign(this.defaults, option);
    this.el = this.options.el;
    this.min = this.options.min;
    this.max = this.options.max;
    this.interval = this.options.interval;
    this.autostart = this.options.autostart;
    this.default = this.options.default;
    this._intervalName = null;

    if (this.autostart) {
      this.start();
    } else {
      this.el.innerText = this.default;
    }
  }
  /**
   * @start 数据开始播放(min-max范围数字)
   * 
   */


  _createClass(RollNumber, [{
    key: "start",
    value: function start() {
      this._intervalName && clearInterval(this._intervalName);
      var allarray = [];
      var picknumber = 7;

      var _this = this;

      this._intervalName = setInterval(function () {
        _this.roll(allarray, picknumber);
      }, this.interval);
      return picknumber;
    } // 播放时显示数据

  }, {
    key: "roll",
    value: function roll(allarray, picknumber) {
      var _this = this;

      for (var i = _this.min; i <= _this.max; i++) {
        allarray.push(i);
      }

      picknumber = allarray[Math.floor(Math.random() * allarray.length)]; // this.el.innerText = picknumber;
      // return picknumber;
      // console.log(11113,picknumber);
    }
    /**
     * @stop 数据停止播放
     * @n 停止时显示值
     */

  }, {
    key: "stop",
    value: function stop(n) {
      this._intervalName && clearInterval(this._intervalName);

      if (n) {
        // this.el.innerText = n;
        return false;
      } // this.el.innerText = this.default;

    }
    /**
     * @reset 重置
     * 恢复到默认显示状态
     */

  }, {
    key: "reset",
    value: function reset() {
      this._intervalName && clearInterval(this._intervalName); // this.el.innerText = this.default;

      return true;
    }
  }]);

  return RollNumber;
}();

var _default = RollNumber;
exports.default = _default;

//# sourceMappingURL=Rollnumber.js.map