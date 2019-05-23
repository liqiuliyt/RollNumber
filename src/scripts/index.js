
// require('jquery');
var $ = require("jquery");
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
    'max': 10,
    'autostart': false,
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
    console.log(1111,rollnumber.start());
    // typeof(num)==="number"
    // console.log(1110,typeof(rollNumber.start()) === 'Number');
}, false);

stop.addEventListener('click', function () {
    console.log(22222,rollnumber.stop(7));
}, false);

reset.addEventListener('click', function () {
    console.log(3333, rollnumber.reset());
}, false);


var picknumber = new pickNumber(pickOptions);

pick.addEventListener('click', function () {
    console.log(5555,picknumber.pick());
    // pickContent.innerText = picknumber.pick();
}, false);

resetPick.addEventListener('click', function () {
    console.log(66666,picknumber.reset());
    // picknumber.reset();
}, false);


import faceMerges from './facemerge.js';
let showImg = document.getElementsByTagName('img');

let options = {
    'template_url': 'https://cdn1.zhizhucms.com/materials/origin/938821c52259e1206925e57ec526fa80_origin.jpeg',
    'merge_url': 'https://cdn1.zhizhucms.com/materials/origin/9beed908d40183cdfcf69a58255a91e3_origin.jpg',
    'merge_rate ': 100
};

let faceMerge = new faceMerges(
    options
);
faceMerge.ajax().then(data=>{
    showImg[0].src='data:image/png;base64,'+data.result;
    // console.log(1111,data.result);
});

