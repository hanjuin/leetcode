/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumLeft = []
    let sl = 0
    let sumRight = []
    let sr = 0

    for(let i = 0; i < nums.length; i++){
        sl += nums[i]
        sumLeft.push(sl)
    }
    for(let i = nums.length - 1; i >= 0 ; i--){
        sr += nums[i]
        sumRight.push(sr)
    }
    for(let i = 0; i < nums.length; i++ ){
        if(sumLeft[i] == sumRight[nums.length - 1 - i]){
            return i
        }
    }
    return -1
};