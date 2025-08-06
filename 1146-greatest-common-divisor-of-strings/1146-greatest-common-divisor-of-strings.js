/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let gcd = 0
    let a = str1.length
    let b = str2.length       
    let min = Math.min(a,b)

    for (i = 1; i <= min; i ++){
        if(a%i == 0 && b%i == 0){
            gcd = i
        }
    } 
    if(str1 + str2 != str2 + str1) return ""
    if(str1 == str2.repeat(a/b) || str1 == str2.slice(0,gcd).repeat(a/gcd)){
        return str1.slice(0,gcd)
    }else{
        return ""
    }
};