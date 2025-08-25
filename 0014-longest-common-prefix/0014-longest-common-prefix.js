/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let shortest = strs[0]
    let prefix = ''

    for(let word in strs){
        if(strs[word].length < shortest.length){
            shortest = strs[word]
        }
    }

    for (let i = 0; i < shortest.length; i++) {
        let flag = true
        for (let word of strs) {
            if (word[i] !== shortest[i]) {
                flag = false
            }
        }
        if(flag == false){break}
        prefix += shortest[i]
    }

    return prefix
};