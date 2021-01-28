/**
 * 基数排序
 * 目前只处理相同长度的数据的数组
*/

let dataLength = 10000;
let oriA = [];
let LongLen = 11;
function radix_sort(A) {
  let len = A.length;
  if (len <= 0) return;
  let tempA = [];
  let finalArr = [];
  A.map(item => {
    tempA.push({
      baseData: item,
      indexData: ''
    });
  });
  // 每个位置的数据开始计算
  for(let i = LongLen - 1; i >= 0; i--) {
    tempA.map(item => {
      item.indexData = Number(item.baseData.toString()[i]);
    });
    tempA = countingSort(tempA);
  }
  tempA.map(item => {
    finalArr.push(item.baseData);
  });
  return finalArr;
}


// 计数排序,改造用于支持位数的排序
function countingSort(baseArr) {
  let len = baseArr.length;
  if (len <= 0) return;
  let max = 0;
  let arr = [];
  let afterBaseArr = [];
  // 获取数据的范围
  baseArr.map(item => {
    if (item.indexData > max) {
      max = item.indexData;
    }
  });
  // 构造个数数组
  for (let i = 0; i <= max; i++) {
    arr[i] = 0;
  }
  // 统计个数
  baseArr.map((item) => {
    arr[item.indexData]++;
  });
  // 个数数组顺序求和
  arr.map((item, index) => {
    if (index > 0) {
      arr[index] = item + arr[index - 1];
    }
  });
  for(let n = len - 1; n >= 0; n--) {
    let item = baseArr[n];
    afterBaseArr[arr[item.indexData] - 1] = item;
    arr[item.indexData]--;
  }
  return afterBaseArr;
}

// 生成随机数
function getRandomInt(len) {
  let random = Math.random() + 0.1;
  return Math.floor(random * Math.pow(10, len));
}
for (let i = 0; i < dataLength; i++) {
  oriA.push(getRandomInt(LongLen));
}
result = radix_sort(oriA);
console.log('基数排序');
console.log(result.length);
for (let i = 0; i < dataLength; i++) {
  console.log(result[i]);
}