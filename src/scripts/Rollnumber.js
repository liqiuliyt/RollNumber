/**
 * 数据滚动
 * @param {object} el 轮播数字显示在该对象中 (必传）
 * @param {number=0} min 最小值
 * @param {number=100} max 最大值
 * @param {number=0} default 默认初始值
 * @param {boolean=false} autostart 是否自动播放
 * @param {number=100} interval 播放速度ms
 * @example new RollNumber({object}).start()=>
 * @returns 
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
        let picknumber = 7;
        let _this = this;
        this._intervalName = setInterval(function () {
            
           _this.roll(allarray, picknumber);
          
        }, this.interval);
        return picknumber;
    }

    // 播放时显示数据
    roll(allarray, picknumber) {
        let _this = this;
        for (var i = _this.min; i <= _this.max; i++) {
            allarray.push(i);
        }
        picknumber = allarray[Math.floor(Math.random() * (allarray.length))];
    }

    /**
     * 数据停止播放
     * @param {nember|null} n 停止时显示值
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
     *  重置:恢复到默认显示状态
     */
    reset() {
        this._intervalName && clearInterval(this._intervalName);
        this.el.innerText = this.default;
        return true;
    }
}
export default RollNumber;