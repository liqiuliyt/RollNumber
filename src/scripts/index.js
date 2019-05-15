import '../styles/index.scss';

console.log('webpack starterkit');
import rollNumber from './Rollnumber';
import pickNumber from './Picknumber';

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let rollContent = document.getElementById('content');

let resetPick = document.getElementById('resetPick');
let pick = document.getElementById('pick');
let pickContent=document.getElementById('pickContent');

let rollOptions = {
    'el': rollContent,
    'min': 0,
    'max': 100,
    'autostart': true,
    'interval': 100,
    'default':0
};

let pickOptions = {
    'min': 60,
    'max': 80,
    'count': 2,
    'maxTimes': 10,
};

let rollnumber = new rollNumber(rollOptions);

start.addEventListener('click', function () {
    rollnumber.start(true);
}, false);

stop.addEventListener('click', function () {
    rollnumber.stop();
}, false);

reset.addEventListener('click', function () {
     rollnumber.reset();
}, false);


var picknumber = new pickNumber(pickOptions);

pick.addEventListener('click', function () {
    pickContent.innerText = picknumber.pick();
}, false);

resetPick.addEventListener('click', function () {
    picknumber.reset();
}, false);