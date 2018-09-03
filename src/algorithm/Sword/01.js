/**
 * 在一个二维数组中（每个一维数组的长度相同），
 * 每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

function find(matrix, number) {
  const columns = matrix.length;
  const rows = matrix[0].length;

  let isFind = false;
  let row = 0;
  let column = columns - 1;

  while (row < rows && column >= 0) {
    if (matrix[row][column] === number) {
      isFind = true;
      break;
    } else if (matrix[row][column] > number) {
      column--;
    } else {
      row++;
    }
  }

  return isFind;
}
