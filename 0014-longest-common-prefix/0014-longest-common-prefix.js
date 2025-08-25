/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let shortest = strs[0]
    let prefix = ''

    for(let word of strs){
        if(word.length < shortest.length){
            shortest = word
        }
    }

    for (let i = 0; i < shortest.length; i++) {
        
        for (let word of strs) {
            if (word[i] !== shortest[i]) {
                return prefix
            }
        }
        prefix += shortest[i]
    }

    return prefix
};