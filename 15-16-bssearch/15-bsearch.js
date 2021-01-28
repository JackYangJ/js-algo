// 二分查找

// function bsearch(arr, value) {
//   let low = 0;
//   let height = arr.length - 1;
//   while (low <= height) {
//     let mid = parseInt((low + height) / 2);
//     if (arr[mid] == value) {
//       return mid;
//     } else if (arr[mid] < value) {
//       low = mid + 1;
//     } else {
//       height = mid - 1;
//     }
//   }
// }



// 递归实现二分查找
// function bsearch(arr, val) {
//   return bsearchInternally(arr, 0, val.length, val)
// }

// function bsearchInternally(arr, low, high, val) {
//   if (low > high) return -1;
//   let mid = low + ((high - low) >> 1);
//   if (arr[mid] == val) {
//     return mid;
//   } else if (arr[mid] < val) {
//     return bsearchInternally(arr, mid + 1, high, val)
//   } else {
//     return bsearchInternally(arr, low, mid - 1, val)
//   }
// }

// console.log(bsearch([8,11,19,23,27,33,45,55,67,98], 45))

// 如何编程实现“求一个数的平方根”？要求精确到小数点后 6 位。

function squareRoot(val) {
  let low = 0;
  let high = val
  while (low <= val) {
    console.log(low)
    let mid = (low + high) / 2;
    if (mid * mid == val || (Math.abs(val - mid * mid) < 0.000001)) {
      return mid;
    } else if (mid * mid < val) {
      low = mid + 0.000001;
      // console.log(mid);
      // console.log(mid + 0.000001);
      console.log('low', low);
    } else {
      high = mid - 0.000001;
      console.log('high', high);
    }
    // console.log(mid);
  }
}

console.log(squareRoot(9));