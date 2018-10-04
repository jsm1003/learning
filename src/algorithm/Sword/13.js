/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
 * 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */

//  常规：空间换时间
function reOrderArray(array) {
  let oddArr = [];
  let evenArr = [];

  array.forEach(i => {
    if (i % 2 === 1) {
      oddArr.push(i);
    } else {
      evenArr.push(i);
    }
  });

  return oddArr.concat(evenArr);
}

// 插入排序思想：
function reOrderArray2(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] % 2 === 0 && temp % 2 === 1) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }

  return array;
}

// 冒泡排序思想： 前偶后寄则交换位置
function reOrderArray3(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] % 2 === 0 && array[j + 1] % 2 === 1) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}
