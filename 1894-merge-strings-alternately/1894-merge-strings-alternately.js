/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let temp = "";
    for (i = 0; i < word1.length + word2.length; i ++){
        if(word1[i] !=null){
            temp += word1[i]
        }
        if(word2[i] !=null){
            temp += word2[i]
        }
    }

    return temp
};