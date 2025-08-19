/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
if (word1.length !== word2.length) return false;

  const a = new Array(26).fill(0);
  const b = new Array(26).fill(0);

  const base = "a".charCodeAt(0);
  for (let ch of word1) a[ch.charCodeAt(0) - base]++;
  for (let ch of word2) b[ch.charCodeAt(0) - base]++;

  // 1) Same set of used letters
  for (let i = 0; i < 26; i++) {
    const usedA = a[i] > 0, usedB = b[i] > 0;
    if (usedA !== usedB) return false;
  }

  // 2) Same multiset of frequencies
  const fa = a.filter(x => x > 0).sort((x, y) => x - y);
  const fb = b.filter(x => x > 0).sort((x, y) => x - y);

  if (fa.length !== fb.length) return false;
  for (let i = 0; i < fa.length; i++) {
    if (fa[i] !== fb[i]) return false;
  }
  return true;
};