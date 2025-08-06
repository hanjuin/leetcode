/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim()                // remove leading/trailing spaces
            .split(/\s+/)         // split by one or more spaces
            .reverse()            // reverse the array
            .join(" ");           // join with single space
};