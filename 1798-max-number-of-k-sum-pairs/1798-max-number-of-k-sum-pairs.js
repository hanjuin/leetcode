/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b)
    let i = 0
    let j = nums.length-1 
    let count = 0
    while (i < j){
        if(nums[i] + nums[j] == k){
            count++
            i++ 
            j--
            // if(count>0){
            //     j = nums.length -1
                
            // }
        }else if(nums[i] + nums[j] < k){
            i++
        }else{
            j--
        }
    }
    
    return count
};