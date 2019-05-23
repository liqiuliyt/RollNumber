import {assert }from 'chai';
import rollNumber from './Rollnumber';
let start = document.getElementById('start');
let rollOptions = {
    'el': start,
    'min': 0,
    'max': 10,
    'autostart': true,
    'interval': 100,
    'default': 0
};
const rollnumber = new rollNumber(rollOptions);

describe('rollnumber',()=>{
    it('start',()=>{
        // assert(true);
        assert.equal(rollnumber.start(), '7');
        // assert(rollnumber.start);
    });
    it('stop',()=>{
        assert.equal(rollnumber.stop(),undefined);
    });
    it('reset',()=>{
        assert(rollnumber.reset());
    });
});


// import rollNumber from './Rollnumber';

// let rollOptions = {
//     'el': '#test',
//     'min': 0,
//     'max': 10,
//     'autostart': false,
//     'interval': 100,
//     'default': 0
// };

// describe('roll numbers', () => {
    
//     test('rollnumber-start', () => { 
//         const rollnumber = new rollNumber(rollOptions);
//         expect(true).toBeTruthy();
//         // expect(rollnumber.start()).toBeTruthy();
//     });
// //     test('rollNumber-stop',()=>{
// //         expect(rollNumber.stop(8)).toBeFalsy();
// //     });
// //     test('rollNumber-reset',()=>{
// //         expect(rollNumber.reset()).toBeTruthy();
// //     });
// });