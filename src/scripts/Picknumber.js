// import { match } from "../../../../../Library/Caches/typescript/3.4.3/node_modules/@types/minimatch";

class PickNumber {
    constructor(option) {

        this.defaults = {
            'min': 0,
            'max': 100,
            'count': 2,
            'maxTimes': 100,
        };

        this.options = Object.assign(this.defaults, option);
        this.min = this.options.min;
        this.max = this.options.max;
        this.count = this.options.count;
        this.maxTimes = this.options.maxTimes;

        this._num = 1;
        this._allarray = [];
    }

    pick() {
        if (this._num===1) {
            for (let i = this.min; i <= this.max; i++) {
                this._allarray.push(i);
            }  
        }
        if(this._num<=this.maxTimes){
            this._num++;
            return this.getPickNumber(); 
        }
        return null;
    }
    getPickNumber() {
        let picknumber = [];
        if (this._allarray.length >= this.count) {
            for (let j = 0; j < this.count; j++) {
                picknumber.push(this._allarray[Math.floor(Math.random() * (this._allarray.length))]);
                this._allarray.forEach((item, index) => {
                    picknumber.map(element => {
                        if (item == element) {
                            this._allarray.splice(index, 1);
                        }
                    });
                });
            }
            return picknumber;
        } 
        return null;
    }
    reset() {
        this._allarray=[];
        this._num = 1;

        this.options = this.defaults;
        this.min = this.options.min;
        this.max = this.options.max;
        this.count = this.options.count;
        this.maxTimes = this.options.maxTimes;
    }
}
export default PickNumber;