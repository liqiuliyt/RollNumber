import {assert }from 'chai';
import pickNumber from './Picknumber';
// let start = document.getElementById('start');
let pickOptions = {
    'min': 60,
    'max': 80,
    'count': 2,
    'maxTimes': 10,
};
var picknumber = new pickNumber(pickOptions);

describe('picknumber',()=>{
    it('pick',()=>{
        for(let i;i< picknumber.pick().length;i++){
            assert.equal(typeof(picknumber.pick()[i]), 'number');
        }
        // assert.equal(picknumber.pick(), '7');
    });
    it('reset',()=>{
        assert(picknumber.reset());
    });
});