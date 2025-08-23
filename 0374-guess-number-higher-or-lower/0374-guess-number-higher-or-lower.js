/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 1
    let high = n
    let myNum = Math.floor((low + high) / 2)
    let result = guess(myNum)
    while(result!=0){
        if(result == -1){
            high = myNum - 1
            myNum = Math.floor((low + high) / 2)
        }else{
            low = myNum + 1
            myNum = Math.floor((low + high) / 2)
        }
        result = guess(myNum)
    }
    return myNum
};