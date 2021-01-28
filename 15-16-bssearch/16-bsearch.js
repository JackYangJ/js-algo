// 变体一：查找第一个值等于给定值的元素
// let bs1 = function(a, value) {
//   let low = 0;
//   high = a.length - 1;
//   while (low < high) {
//     let mid = parseInt(low + (high - low) / 2);
//     if (a[mid] < value) {
//       low = mid + 1;
//     } else if (a[mid] > value) {
//       high = mid - 1;
//     } else {
//       if (mid == 0 || a[mid - 1] != value) {
//         return mid;
//       } else {
//         high = mid - 1;
//       }
//     }
//   }
// }

// console.log(bs1([8,11,19,23,27,33,45,45,55,67,98], 45));

// 变体二：查找最后一个值等于给定值的元素

// let bs2 = function(a, value) {
//   let low = 0;
//   high = a.length - 1;
//   while (low < high) {
//     let mid = parseInt(low + (high - low) / 2);
//     if (a[mid] < value) {
//       low = mid + 1;
//     } else if (a[mid] > value) {
//       high = mid - 1;
//     } else {
//       if (mid == a.length - 1 || a[mid + 1] != value) {
//         return mid;
//       } else {
//         high = mid + 1;
//       }
//     }
//   }
// }

// console.log(bs2([8,11,19,23,27,33,45,45,45,55,67,98], 45));

// 变体三：查找第一个大于等于给定值的元素

// let bs3 = function(a, value) {
//   let low = 0;
//   high = a.length - 1;
//   while (low < high) {
//     let mid = parseInt(low + (high - low) / 2);
//     if (a[mid] < value) {
//       low = mid + 1;
//     } else {
//       if (mid == 0 || a[mid - 1] < value) {
//         return mid;
//       } else {
//         high = mid - 1;
//       }
//     }
//   }
// }

// console.log(bs3([8,11,19,23,27,33,45,45,45,55,67,98], 45));

// 变体四：查找最后一个小于等于给定值的元素

// let bs4 = function(a, value) {
//   let low = 0;
//   high = a.length - 1;
//   while (low < high) {
//     let mid = parseInt(low + (high - low) / 2);
//     if (a[mid] > value) {
//       high = mid - 1;
//     } else {
//       if (mid == a.length - 1 || a[mid + 1] > value) {
//         return mid;
//       } else {
//         low = mid + 1;
//       }
//     }
//   }
// }

// console.log(bs4([8,11,19,23,27,33,45,45,45,55,67,98], 45));

// [4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3]

// 今天的思考题也是一个非常规的二分查找问题。如果有序数组是一个循环有序数组,比如 4,5,6,1,2,3。针对这种情况，如何实现一个求“值等于给定值”的二分查找算法呢？

let circleBSearch = function (arr, value) {
  let midNum = parseInt(arr / 2);
  let isLeft = true;
  let temArr = [];
  let index = 0;
  // 获取分割点
  if (arr[midNum - 1] > arr[midNum] && arr[midNum - 1] > arr[midNum - 2]) {
    midNum = midNum - 1;
  } else {
    midNum = midNum - 2;
  }
  if (arr[0] < value) {
    isLeft = false;
  }
  // 开始分割
  if (isLeft) {
    temArr = arr.slice(0, midNum);
  } else {
    temArr = arr.slice(midNum + 1, arr.length - 1);
  }
  // 套用之前的逻辑
  let hinIndex = bs4(temArr, value);
  if (isLeft) {
    index = hinIndex;
  } else {
    index = hinIndex + midNum + 1;
  }
  return index;
};

console.log(bs4([4,5,6,1,2,3], 5));