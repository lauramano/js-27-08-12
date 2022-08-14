'use strict';
// NE (funksion deklareisin) budas O bus funsion ekspresin budas
const skAvg = (numArr) => {
   const avg = numArr.reduce((total, sk) => total + sk, 0)/numArr.length;
   console.log('avg apskaiciuojam:', avg.toFixed(2));
   return avg;
}
//  jei salia const skAvg parasysim export NEVEIKS reikia naujoi eilutej
export default skAvg;