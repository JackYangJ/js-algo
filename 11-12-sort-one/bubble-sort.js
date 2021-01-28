/**
 * 冒泡排序
 * 
*/
const bubble = (arr) => {
  let len = arr.length;
  for(let i = 0; i < len; i++) {
    let sortElement = arr[i];
    for(let j = i + 1; j < len; j ++) {
      if (sortElement > arr[j]) {
        let temEle = arr[j];
        arr[i] = temEle;
        arr[j] = sortElement;
      } else {
        sortElement = arr[j];
      }
    }
  }
  return arr;
}
console.time('start');
console.log(bubble([5, 234, 43, 4, 5, 6, 6, 23]));
console.timeEnd('start');