/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let count = 0
    for (let i = 0; i < k; i ++){
        count += checkVowels(s[i])
    }
    let max = count
    for(i = k; i < s.length; i ++){
        count += checkVowels(s[i]) - checkVowels(s[i-k])
        if(count > max){
            max = count
        }
    }
    return max
};

var checkVowels= function(s){
    let vowels = 'aeiouAEIOU'
    if(vowels.match(s)){return 1}
    return 0
}