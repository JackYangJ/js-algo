/**
 * 快速排序
 * 
*/
// 快速排序，A是数组，n表示数组的大小
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
    console.log(j);
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

let arr = [23, 32, 34, 34, 2, 32, 45, 4334, 23, 32, 65, 654];
quick_sort(arr);
console.log(arr);