module.exports = function check(str, bracketsConfig) {
  let opensBrack = [];

  bracketsConfig.forEach(function(elem) {
    opensBrack.push(elem[0]);
  })

  let closetsBrack = [];

  bracketsConfig.forEach(function(elem) {
    closetsBrack.push(elem[1]);
  })

  let brackObj = {};

  bracketsConfig.forEach(function(elem) {
    let key = elem[1];
    let value = elem[0];
    brackObj[key] = value;
  })

  let stack = [];

  for (let i = 0; i < str.length; i++) {

    let currentBrack = str[i];
    let topStack = stack[stack.length - 1];

    if (topStack === currentBrack && closetsBrack.includes(currentBrack)) {
      stack.pop();
    } else {
      if (opensBrack.includes(currentBrack)) {
        stack.push(currentBrack);
      } else {

        if (stack.length === 0) {
          return false;
        }

        if (brackObj[currentBrack] === topStack) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}
