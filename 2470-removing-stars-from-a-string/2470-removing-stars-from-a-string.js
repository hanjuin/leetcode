/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let string = []
    for(let i = 0; i < s.length; i++){
        if(s[i] != '*'){
            string.push(s[i])
        }else{
            string.pop()
        }
    }
    return string.join('')
};