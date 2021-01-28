/**
 * 计数排序
 * 
*/
function countingSort(baseArr) {
  let len = baseArr.length;
  if (len <= 0) return;
  let max = 0;
  let arr = [];
  let afterBaseArr = [];
  // 获取数据的范围
  baseArr.map(item => {
    if (item > max) {
      max = item;
    }
  });
  // 构造个数数组
  for (let i = 0; i <= max; i++) {
    arr[i] = 0;
  }
  // 统计个数
  baseArr.map((item) => {
    arr[item]++;
  });
  // 个数数组顺序求和
  arr.map((item, index) => {
    if (index > 0) {
      arr[index] = item + arr[index - 1];
    }
  });
  for(let n = len - 1; n >= 0; n--) {
    let item = baseArr[n];
    afterBaseArr[arr[item] - 1] = item;
    arr[item]--;
  }
  return afterBaseArr;
}
console.log(countingSort([2, 5, 3, 0, 2, 3, 0, 3, 3, 0, 2, 3, 0, 3, 0, 2, 3, 0, 3, 0, 2, 3, 0, 3, 0, 2, 3, 0, 3, 0, 2, 3, 0, 3, 0, 2, 3, 0, 3, 0, 2, 3, 0, 3, 0, 2, 3, 0, 3, 0, 2, 3, 0, 3, 0, 2, 3, 0, 3, 0, 2, 3, 0, 3, 0, 2, 3, 0, 3, 0, 2, 3, 0, 3, 0, 2, 3, 0, 3, 0, 2, 3, 0]));