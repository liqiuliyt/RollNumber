import '../styles/index.scss';

console.log('webpack starterkit');
import rollNumber from './Rollnumber';
import pickNumber from './Picknumber';

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let pick=document.getElementById('pick');

let rollnumber = new rollNumber(50,60,false);
rollnumber.start();
start.addEventListener('click',function(){
    rollnumber.start(true);
},false);
stop.addEventListener('click',function(){
    rollnumber.stop();
},false) ;


var picknumber = new pickNumber();
pick.addEventListener('click',function(){
    picknumber.pick();
},false) ;