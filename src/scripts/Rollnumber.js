// import { match } from "../../../../../Library/Caches/typescript/3.4.3/node_modules/@types/minimatch";

class RollNumber {
    constructor(option) {
        this.defaults = {
            'min': 0,
            'max': 100,
            'autostart': true,
            'interval': 100,
            'default': 0
        };
        this.options = Object.assign(this.defaults,option);
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



    start() {
        this._intervalName && clearInterval(this._intervalName);
        let allarray = [];
        let picknumber = [];
        let _this = this;
        this._intervalName = setInterval(function () {
            _this.roll(allarray, picknumber);
        }, this.interval);
    }

    roll(allarray, picknumber) {
        let _this = this;
        for (var i = _this.min; i <= _this.max; i++) {
            allarray.push(i);
        }
        picknumber = allarray[Math.floor(Math.random() * (allarray.length))];
        this.el.innerText = picknumber;
    }

    stop(n) {
        this._intervalName && clearInterval(this._intervalName);
        if (n) {
            this.el.innerText = n;
        }
    }
    reset() {
        this._intervalName && clearInterval(this._intervalName);
        this.el.innerText = this.default;
    }
}
export default RollNumber;