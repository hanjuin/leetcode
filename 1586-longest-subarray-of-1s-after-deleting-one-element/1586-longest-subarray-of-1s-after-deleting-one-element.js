/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0
    let maxLength = 0
    let zeroCount = 0
    let k = 1
    for(let right = 0; right < nums.length; right++){
        if(nums[right] === 0){
            zeroCount += 1
        }
        while (zeroCount > k){
            if(nums[left] === 0){
                zeroCount -= 1
            }
            left += 1
        }
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength - 1
};