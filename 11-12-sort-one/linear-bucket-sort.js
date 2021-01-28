/**
 * 桶排序
 * 首先遍历所有数据，然后划分区间段，假设外部数据为10万，内部处理最大的性能是100
 * 
*/
let tempA = [];
let oriA = [];
let dataLength = 10000000;
let processLimit = 10000;
function bucket_sort(A) {
  let len = A.length;
  let minA = A[0];
  let maxA = A[0];
  let bucketLen = 0;
  let bucketArr = [];
  let afterArr = [];
  for(let i = 0; i < len; i++) {
    if (A[i] > maxA) maxA = A[i];
    if (A[i] < minA) minA = A[i];
  }
  // 获取桶的数目
  bucketLen = Math.ceil((maxA - minA) / processLimit);
  // 构建二维数组
  for (let i = 0; i < bucketLen; i++) {
    bucketArr.push([]);
  }
  for(let i = 0; i < len; i++) {
    let item = A[i];
    let consult = parseInt(item / processLimit);
    let remainder = item % processLimit;
    if (consult > 1) {// 大于第一分组的数据
      if (remainder != 0) {
        bucketArr[consult].push(item);
      } else {
        bucketArr[consult - 1].push(item);
      }
    } else {
      bucketArr[0].push(item);
    }
  }
  for (let i = 0; i < bucketLen; i++) {
    quick_sort(bucketArr[i]);
    afterArr = afterArr.concat(bucketArr[i] || []);
  }
  return afterArr;
}

// 快排
function quick_sort(A) {
  let n = A.length;
  quick_sort_c(A, 0, n - 1);
}
// 快速排序递归函数，p, r 为下标
function quick_sort_c(A, p, r) {
  if (p >= r) return;
  let q = partition(A, p, r);
  quick_sort_c(A, p, q - 1);
  quick_sort_c(A, q + 1, r);
}

// 分区函数
function partition(A, p, r) {
  let pivot = A[r];
  let i = p;
  for (let j = p; j < r; j++) {
    if (A[j] < pivot) {
      let mid = A[i];
      A[i] = A[j];
      A[j] = mid;
      i = i + 1;
    }
  }
  let fin = A[i];
  A[i] = A[r];
  A[r] = fin;
  return i;
}

// 生成随机数
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
for (let i = 0; i < dataLength; i++) {
  oriA.push(getRandomInt(0, dataLength));
}
tempA = bucket_sort(oriA);
console.log('输出排序');
for (let i = 0; i < dataLength; i++) {
  console.log(tempA[i]);
}