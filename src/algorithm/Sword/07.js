/**
 * 大家都知道斐波那契数列，现在要求输入一个整数n，
 * 请你输出斐波那契数列的第n项（从0开始，第0项为0）。n<=39
 */

function Fibonacci(n) {
  let preFib = 0;
  let curFib = 1;
  let newFib = 0;

  if (n <= 1) {
    return n;
  }

  for (let i = 1; i <= n; i++) {
    preFib = curFib;
    curFib = newFib;
    newFib = preFib + curFib;
  }

  return newFib;
}
