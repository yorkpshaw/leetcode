/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {


    // Solution III

   //  Binary Search Solution

   if(x < 2) return x;
   let result = 0;
   let start = 1;
   let end = x/2;

   while(start<=end){
       let mid = Math.floor(start + (end-start)/2);
       let sqr = mid*mid;
       if(sqr == x) return mid;
       else if(sqr<x){ start = mid + 1; result = mid;}
       else end = mid - 1;

   }

   return result;

//  Alternate Binary Search
//   var left = 1;
//   var right = Math.floor(x / 2) + 1;
//   var mid;

//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);

//     if (mid * mid > x) {
//       right = mid - 1;
//     } else if (mid * mid < x) {
//       left = mid + 1;
//     } else {
//       return mid;
//     }
//   }

//   return right;


};
// Built in Solution I
// return Math.floor(Math.sqrt(x))

// Solution II

   // for(let i = 0; i<=x + 1; i++){
   //     if(i*i>x){
   //         return i-1;
   //     }
   // }
