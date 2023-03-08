/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let miss = 1;
    let r = [];
    let i = 0;
    while (r.length < k) {
      if (miss === arr[i]) i += 1;
      else r.push(miss);
      miss += 1;
    }
    return r[k - 1];
  };

//   let prev = 0;

//     for(let i = 0; i < arr.length; i++) {
//         const diff = arr[i] - prev - 1;
//         if(k > diff) k -= diff;
//         else return prev + k;
//         prev = arr[i];
//     }
//     return prev + k


// Set:
// var findKthPositive = function(arr, k) {
//     let i=1, set=new Set(arr);
//     while(k>0){
//         if(!set.has(i) && --k==0){return i};
//         i++;
//     }
// };

// Array:
// var findKthPositive = function(arr, k) {
//     let i=1, ind=0;
//     while(k>0){
//         if(ind<arr.length && arr[ind]==i){ind++}
//         else if(--k==0){return i};
//         i++;
//     }
// };

// Bucket:
// var findKthPositive = function(arr, k) {
//     let bucket=new Array(2000).fill(0)
//     for(let i=0; i<arr.length; i++){
//         bucket[arr[i]-1]++;
//     }
//     for(let j=0; j<2000; j++){
//         if(bucket[j]==0 && --k==0){return j+1};
//     }
// };

// Binary Search:
// var findKthPositive = function(arr, k) {
//     let l=0, r=arr.length;
//     while(l<r){
//         let mid=l+Math.floor((r-l)/2);
//         if(arr[mid]-mid-1<k){l=mid+1}
// 		else{r=mid};
//     }
//     return k+l;  // arr[l-1]+k-(arr[l-1]-(l-1)-1)
// };
