/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  const n = senate.length;
  const rQ = [];
  const dQ = [];

  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') rQ.push(i);
    else dQ.push(i);
  }

  while (rQ.length && dQ.length) {
    const r = rQ.shift();
    const d = dQ.shift();
    if (r < d) {
      // R acts first, bans D; R returns in next cycle
      rQ.push(r + n);
    } else {
      // D acts first, bans R; D returns in next cycle
      dQ.push(d + n);
    }
  }
  return rQ.length ? "Radiant" : "Dire";
};
