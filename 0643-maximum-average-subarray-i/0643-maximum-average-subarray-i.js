/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let i = 0
    let sum = 0

    while(i < k){
        sum += nums[i]
        i ++
    }
    let maxAver = sum/k

    while(i < nums.length){
        sum = sum + nums[i] - nums[i - k] 
        let aver = sum/k
        if(aver>maxAver){
            maxAver = aver
        }
        i ++
    }

    return maxAver
};
