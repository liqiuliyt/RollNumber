// import { match } from "../../../../../Library/Caches/typescript/3.4.3/node_modules/@types/minimatch";

class PickNumber {
    constructor(min = 5, max = 100, count = 2) {
        this.min = min;
        this.max = max;
        this.count = count;
        this.num=0;
        this.allarray=[];
    }
    pick() {
        let allarray = [];
        let picknumber = [];
        if(!this.num){
            for (let i = this.min; i <= this.max; i++) {
                this.allarray.push(i);
            }   
            this.num=1;
        }
        if(this.allarray.length>0){
            for (let j = 0; j < this.count; j++) {
                let c = this.allarray[Math.floor(Math.random() * (this.allarray.length))];
                picknumber.push(c);
            }
            this.allarray.forEach((item, index) => {
                picknumber.map(element => {
                    if (item == element) {
                        this.allarray.splice(index, 1);
                    }
                });
            });
        }
        document.getElementById('pickContent').innerText = picknumber;
        console.log(3333,picknumber);
        console.log(4444,this.allarray);
    }
    reset() {
    }
}
export default PickNumber;