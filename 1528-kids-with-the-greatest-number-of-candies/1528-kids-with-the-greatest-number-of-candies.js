/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max.apply(null, candies)
    let temp = []
    for (i in candies){temp.push(candies[i]+extraCandies>=max)}
    return temp
};