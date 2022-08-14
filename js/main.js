'use strict';
//  impotavom addNums funkcija
// importuojamas funkcijas galima rasyti per kableli.

import { addNums, minusNums } from './modules/operations.js'
//  importuoti num1  ir num2 ir panaudoti addNums funkcijoje
// importuoti skMasyvas is variables.js
import {num1 as n1, num2 as n2, arr} from './modules/variables.js'

// numatytoji is avg.js
import skAvg from './modules/avg.js';

// importuoti numatytaji 
 import sayHiCia from './modules/sayHi.js';

const rez1 = addNums(n1, n2);
const minusRez = minusNums (15, 25);
const skAvg1 = skAvg(arr);

console.log('Sudeties rezultatas: ', rez1);
console.log('atimties rezultatas: ', minusRez);
console.log('gautas masyvas is variables.js = ', arr);
console.log('gautas vidurkis', skAvg1.toFixed(2) );

sayHiCia('Numatytasis importas Laura');