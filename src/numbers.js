 /**
  * Function decisde if num is divisible by div
  * @param {number} x 
  * @param {number} y 
  */
 var isDiv = (x, y) => x % y == 0;


/**
 * Function recursive, run 1 to 100 and print the result from isDiv
 * @param {number} i 
 * @return number
 */

const repeat = i => {
  if(i === 101) return 0
  console.log( ({true:"Musical"})[isDiv(i,3) && isDiv(i,5)]
            || ({true:"Music"})[isDiv(i, 3)]
            || ({true:"TI"})[isDiv(i, 5)] || i)
  repeat(i+1)
} 


module.exports = () =>  repeat(1);