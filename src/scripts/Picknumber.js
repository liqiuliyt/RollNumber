/**
 * 选择不重复数据
 * @param {number=0} min 变化数字的最小值
 * @param {number=100} max 变化数字的最大值
 * @param {number=2} count 提取不重复的数字个数
 * @param {number=100} maxTimes 最多提取次数
 * @_num {number} 记录pick次数  
 * @_allarray {array} min-max范围内的所有数据
 * @example new PickNumber({param}).PickNumber()=>[,]
 * @returns {Array} 
 */
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

    /**
     * 选择出count个不重复数据（min-max范围内）
     */
    pick() {
        if (this._num === 1) {
            for (let i = this.min; i <= this.max; i++) {
                this._allarray.push(i);
            }
        }
        if (this._num <= this.maxTimes) {
            this._num++;
            return this.getPickNumber();
        }
        return null;
    }

    // 选择数据并对已选数据进行过滤
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
    
    /**
     * 重置
     * 数据恢复至初始状态
     */
    reset() {
        this._allarray = [];
        this._num = 1;

        this.options = this.defaults;
        this.min = this.options.min;
        this.max = this.options.max;
        this.count = this.options.count;
        this.maxTimes = this.options.maxTimes;
        return true;
    }
}
export default PickNumber;