/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let f = -1
    let i = 0 
    if(nums.length != 1){
        while (i < nums.length){
            if(nums[i]!=0){
                nums[f++] = nums[i]
                nums[i] = 0
                
            }
            
            i++
        }
        if(nums.length!=1 && f!=-1){
            nums.unshift(nums[-1])
            nums.pop()
        }
    }

    return nums
}