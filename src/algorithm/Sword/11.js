/**
 * 输入一个整数，输出该数二进制表示中1的个数。
 * 其中负数用补码表示。
 */

//  将1左移与数字比较
function NumberOf1(n) {
  let count = 0,
    flag = 1;
  while (flag) {
    if (flag & n) count++;
    flag = flag << 1;
  }
  return count;
}

// 自身减去1 在于自己做 & 运算，会将自己最右边的1变为0
function NumberOf2(n) {
  let count = 0;

  while (n) {
    n = n & (n - 1);
    count++;
  }

  return count;
}
