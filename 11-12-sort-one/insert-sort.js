/**
 * 插入排序
 * 
*/
const insertSort = (arr) => {
   let len = arr.length;
   if (len <= 1) return arr;
   for(let i = 1; i < len; i++) {
     let value = arr[i];
     let j = i - 1;
     // 查找插入的位置
     for (; j >=0; --j) {
       if (arr[j] > value) {
         arr[j+1] = arr[j]; // 数据移动
       } else {
         break;
       }
     }
     arr[j+1] = value; // 插入数据
   }
   return arr;
}
console.log(insertSort([23, 32, 34, 34, 2, 32, 45, 4334, 23, 32, 65, 654]));
