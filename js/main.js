'use strict';
//  impotavom addNums funkcija
// importuojamas funkcijas galima rasyti per kableli.

import { addNums, minusNums } from './modules/operations.js'
//  importuoti num1  ir num2 ir panaudoti addNums funkcijoje
import {num1, num2} from './modules/variables.js'


function sayHi(name) {
    console.log('Hi from', name);
}
const rez1 = addNums(num1, num2);
const minusRez = minusNums (15, 25);

console.log('Sudeties rezultatas: ', rez1);
console.log('atimties rezultatas: ', minusRez);

sayHi('Laura');