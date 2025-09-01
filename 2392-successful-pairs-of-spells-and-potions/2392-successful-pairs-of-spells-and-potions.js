/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const arr = [...potions].sort((a, b) => a - b);
  const m = arr.length;

  const lowerBound = (target) => {
    let lo = 0, hi = m; 
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] >= target) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  };

  const res = new Array(spells.length);
  for (let i = 0; i < spells.length; i++) {
    const s = spells[i];
    const need = Math.ceil(success / s); 
    const idx = lowerBound(need);
    res[i] = m - idx;
  }
  return res;
};