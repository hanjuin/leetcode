/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let a = 0, b = 1, c = 1
    for (let i = 0; i < n; i++) {
        // console.log(a);
        let d = a + b + c;
        a = b;
        b = c;
        c = d;
    }
    return a
};