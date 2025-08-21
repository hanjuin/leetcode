/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];
  for (let a of asteroids) {
    let alive = true;
    while (
      alive &&
      stack.length &&
      stack[stack.length - 1] > 0 && 
      a < 0                           
    ) {
      const top = stack[stack.length - 1];
      if (Math.abs(top) < Math.abs(a)) {
        stack.pop();            
      } else if (Math.abs(top) === Math.abs(a)) {
        stack.pop();            
        alive = false;          
      } else {
        alive = false;          
      }
    }
    if (alive) stack.push(a);
  }
  return stack;
};