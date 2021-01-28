/**
 * 选择排序
 * 
*/
const selectSort = (arr) => {
  let len = arr.length;
  for(let i = 0; i < len; i++) {
    let value = arr[i];
    let oriValue = arr[i];
    let minIndex = i;
    let j = i;
    for (; j < len; j++ ) {
      if (value > arr[j]) {
        value = arr[j];
        minIndex = j;
      }
    }
    arr[i] = value;
    arr[minIndex] = oriValue;
  };
  return arr;
};
console.log(selectSort([23, 32, 34, 34, 2, 32, 45, 4334, 23, 32, 65, 654]));