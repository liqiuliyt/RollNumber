// import { match } from "../../../../../Library/Caches/typescript/3.4.3/node_modules/@types/minimatch";

class RollNumber {
    constructor(options) {
        this.el = options.el;
        this.min = options.min;
        this.max = options.max;
        this.interval = options.interval;
        this.autostart = options.autostart;
        this.default = options.default;

        this.intervalName = null;
        if (this.autostart) {
            this.start();
        }else{
            this.el.innerText = this.default;
        }
    }



    start(value) {
        this.intervalName && clearInterval(this.intervalName);
        let allarray = [];
        let picknumber = [];
        let _this = this;
        this.intervalName = setInterval(function () {
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
        this.intervalName &&clearInterval(this.intervalName);
        if (n) {
            this.el.innerText = n;
        }
    }
    reset() {
        this.intervalName &&clearInterval(this.intervalName);
        this.el.innerText = this.default;
    }
}
export default RollNumber;