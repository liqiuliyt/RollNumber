"use strict";

var _chai = require("chai");

var _Rollnumber = _interopRequireDefault(require("./Rollnumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var start = document.getElementById('start');
var rollOptions = {
  'el': start,
  'min': 0,
  'max': 10,
  'autostart': true,
  'interval': 100,
  'default': 0
};
var rollnumber = new _Rollnumber.default(rollOptions);
describe('rollnumber', function () {
  it('start', function () {
    // assert(true);
    _chai.assert.equal(rollnumber.start(), '7'); // assert(rollnumber.start);

  });
  it('stop', function () {
    _chai.assert.equal(rollnumber.stop(), undefined);
  });
  it('reset', function () {
    (0, _chai.assert)(rollnumber.reset());
  });
}); // import rollNumber from './Rollnumber';
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

//# sourceMappingURL=Rollnumber.spec.js.map