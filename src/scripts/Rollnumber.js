// import { match } from "../../../../../Library/Caches/typescript/3.4.3/node_modules/@types/minimatch";

class RollNumber {
    constructor(optons) {
        this.el = optons.el;
        this.min = optons.min;
        this.max = optons.max;
        this.interval = optons.interval;
        this.autostart = optons.autostart;
        this.default = optons.default;
        this.intervalName = null;
        if (this.autostart) {
            this.start();
        }
    }



    start(value) {
        this.el.innerText = this.default;
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
        clearInterval(this.intervalName);
        if (n) {
            this.el.innerText = n;
        }
    }
    reset() {

    }
}
export default RollNumber;