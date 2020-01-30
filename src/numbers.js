
 /**
  * Function decisde if num is divisible by div
  * @param {number} num 
  * @param {number} div 
  */
var isDivOfN = (num, div) => num % div == 0;

/**
 * Function delegate if is divisible by 3, 5 or both of them
 * @param {number} i 
 * @return string
 */
var isDiv = (i) => isDivOfN(i, 3) && isDivOfN(i, 5)  ? "Musical" : isDivOfN(i, 3) ? "Music" : isDivOfN(i, 5) ? "TI" : i; 


/**
 * Function recursive, run 1 to 100 and print the result from isDiv
 * @param {number} i 
 * @return number
 */
var numbers = (i) => {
    console.log(isDiv(i));
    return i == 100 ? 0 : numbers(i+1);
}


module.exports = () =>  numbers(1);