/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法
 *（先后次序不同算不同的结果）。
 */

function jumpFloor(number) {
  if (number <= 2) {
    return number;
  }

  let newNum = 0;
  let preNum = 1;
  let curNum = 2;

  for (let i = 3; i <= number; i++) {
    newNum = preNum + curNum;
    preNum = curNum;
    curNum = newNum;
  }

  return newNum;
}

// f(n) = f(n-1) + f(n-2)
function jumpFloor(number) {
  let f = 1;
  let g = 2;

  while (--number) {
    g = g + f;
    f = g - f;
  }

  return f;
}
