/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let a = new Set(nums1)
    let b = new Set(nums2)
    let c = a.difference(b)
    let d = b.difference(a)
    let cArr = [...c]; 
    let dArr = [...d];
    
    return e = [cArr,dArr]
};