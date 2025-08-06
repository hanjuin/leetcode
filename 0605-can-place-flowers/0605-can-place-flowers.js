/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0
    for (i = 0; i < flowerbed.length; i ++){
        if(flowerbed[i] == 0 && (i == 0 || flowerbed[i-1]==0) && (i == flowerbed.length - 1 || flowerbed[i+1]==0)){
            count++
            flowerbed[i] = 1
        }
    }

    return count >= n
};