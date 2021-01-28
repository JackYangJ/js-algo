/**
 * 归并排序
 * 
*/
// 归并算法，A是数组, n表示数组大小
function mergerSort(A) {
  let n = A.length;
  return mergerSortC(A, 0, n);
}

// 递归调用函数
function mergerSortC(A, p, r) {
  // 递归终止条件
  if (p >= r) return;
  if (p + r == 1 || r - p == 1 || A.length == 1) return A;
  // 取p到r之间的中间位置q
  q = Math.floor((p + r) / 2);
  // mergerSortC(A, p, q);
  // mergerSortC(A, q + 1, r);
  // 将A[p...q], A[q+1...r]合并为A[p...r];
  let A2 = A.slice(p, q);
  let A3 = A.slice(q, r);
  console.log(p, q, r);
  console.log();
  return merge(A, mergerSortC(A2, 0, A2.length), mergerSortC(A3, 0, A3.length));
}

// 合并数组
function merge(A1, A2, A3) {
  let len1 = A1.length;
  if (len1 <= 1) return A1;
  let len2 = A2.length;
  let len3 = A3.length;
  // 初始化变量
  let i = 0;
  let j = len2;
  let k = 0;
  let tmp = new Array(len1);
  while (i < len2 && j < len1) {
    if (A2[i] <= A3[j - len2]) {
      tmp[k++] = A2[i++]; // i++ 等于i = i + 1;
    } else {
      tmp[k++] = A3[(j++ - len2)];
    }
  }
  console.log(tmp);
  // console.log(tmp);
  // 判断哪个子数组有剩余的数据
  let start = i, end = len2, type = 2;
  if (j < len1)  {
    start = j - len2;
    end = len3;
    type = 3;
  }

  // 将剩余的数据拷贝到临时数组tmp
  if (type == 2) {
    while (start < end) {
      tmp[k++] = A2[start++];
    }
  } else {
    while (start < end) {
      tmp[k++] = A3[start++];
    }
  }
  // 将tmp中的数组拷贝会A1
  for(let f = 0; f < len1; f++) {
    A1[f] = tmp[f];
  }
  console.log(A1);
  return A1;
};

let arr = [23, 32, 34, 34, 2, 32, 45, 4334, 23, 32, 65, 654];
mergerSort(arr);

// console.log(mergerSort(arr, len));