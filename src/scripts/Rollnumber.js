/**
 * 数据滚动
 * @el   dom对象， 轮播数字显示在该对象中 (必传）
 * @min :number 变化数字的最小值 (默认值为0)
 * @max :number 变化数字的最大值 (默认值为100)
 * @default :number 默认初始值 (0)
 * @autostart  :boolean 是否自动播放( 默认值为false:不自动播放）
 * @interval  :number  播放速度 （默认值为100）
 */
class RollNumber {
    constructor(option) {
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
    start() {
        this._intervalName && clearInterval(this._intervalName);
        let allarray = [];
        let picknumber = [];
        let _this = this;
        this._intervalName = setInterval(function () {
            _this.roll(allarray, picknumber);
        }, this.interval);
    }

    // 播放时显示数据
    roll(allarray, picknumber) {
        let _this = this;
        for (var i = _this.min; i <= _this.max; i++) {
            allarray.push(i);
        }
        picknumber = allarray[Math.floor(Math.random() * (allarray.length))];
        this.el.innerText = picknumber;
    }

    /**
     * @stop 数据停止播放
     * @n 停止时显示值
     */
    stop(n) {
        this._intervalName && clearInterval(this._intervalName);
        if (n) {
            this.el.innerText = n;
            return false;
        }
        this.el.innerText = this.default;
    }

    /**
     * @reset 重置
     * 恢复到默认显示状态
     */
    reset() {
        this._intervalName && clearInterval(this._intervalName);
        this.el.innerText = this.default;
    }
}
export default RollNumber;