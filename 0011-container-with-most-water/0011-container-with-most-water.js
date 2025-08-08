/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0
    let j = height.length - 1
    let max = 0
    let area = 0
    while (i < j ){
        if(height[i] < height[j]){
            area = height[i] * (j-i)
            if(height.length == 2){
                area = height[i]
            }
            i++
        }else{
            area = height[j] * (j-i)
            if(height.length == 2){
                area = height[j]
            }
            j--
        }
        if(area > max){
            max = area
        }
    }
    return max
};