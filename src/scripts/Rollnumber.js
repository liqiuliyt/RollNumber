// import { match } from "../../../../../Library/Caches/typescript/3.4.3/node_modules/@types/minimatch";

class RollNumber {

    constructor(min = 0, max = 100, autostart = false) {
        this.min = min;
        this.max = max;
        this.autostart = autostart;
        this.interval = null;
        this.saveNunber = [];
    }

    start(value) {
        
        this.autostart=value;
        let allarray = [];
        let picknumber = [];
       let _this=this;

       if(this.autostart){
        this.interval = setInterval(function () {
            if (allarray.length > 0) {
                picknumber = allarray[Math.floor(Math.random() * (allarray.length))];
                    allarray.forEach((item, index) => {
                        if (item == picknumber) {
                            allarray.splice(index, 1);
                        }
                    });
                    document.getElementById('content').innerText = picknumber;
                } else {
                    for (var i = _this.min; i <= _this.max; i++) {
                        allarray.push(i);
                        allarray.forEach((item, index) => {
                            _this.saveNunber.forEach(element=>{
                                if (element == item) {
                                    allarray.splice(index, 1);
                                }
                            });
                           
                        }); 
                    }
                    
                }
        }, 100);
    }
    }
    stop() {
        clearInterval(this.interval);
        this.saveNunber.push(document.getElementById('content').innerText);
        document.getElementById('saveContent').innerText=this.saveNunber;
    }


    reset() {

    }
}
export default RollNumber;