'use strict';
//  eksportuoti galima keliais budais. 
// NUMATYTAS (defolt) eksportas ====== 2

//  1 budas parasom 'export'  - (named export) 

export function addNums(a, b) {
    console.log(`${a} + ${b} = ${a + b}`)
    return a + b;
}
export function minusNums(a, b) {
    return a - b;
}
console.log('Pavyko eksportuoti funkcija ir visa kita....');
