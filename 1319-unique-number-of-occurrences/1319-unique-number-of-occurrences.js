/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freq = new Map();
    for (const x of arr) freq.set(x, (freq.get(x) || 0) + 1);

    const unique = new Map();
    for(const [k, v] of freq) unique.set(v, (unique.get(v) || 0) + 1)

    for(const [k, count] of unique){
        if(count>1){
            return false
        }
    }
    return true
};