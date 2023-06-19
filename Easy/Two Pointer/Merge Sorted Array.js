/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let i = m - 1; // i is set to the last non-zero index of nums1
    let j = n - 1; // j is set to the last index of nums2
    let k = m + n - 1; // k is set to the last index of nums1 (the bigger array we are trying to modify)

    while (i >= 0 && j >= 0) {
        if (nums1[i] < nums2[j]) { // If the last num in i is less than last num of j,
            nums1[k] = nums2[j]; // set last index to be last num of j (biggest number)
            k--; // decrement k (last 0) after reassignment
            j--; //decrement j (last num in nums 2) after reassignment
        } else {
            nums1[k] = nums1[i]; // if nums1[i] > nums2[j], set nums1[k] (last 0) to be equal to nums1[i]
            k--;
            i--;
        }
    }

    while (j >= 0) {
        nums1[k] = nums2[j]; // these are the leftover numbers to continue reassigning
        k--;
        j--;
    }

    while (i >= 0) {
        nums1[k] = nums1[i]; // when i is 0, the loop stops
        k--;
        i--;
    }
};

// Better runtime solution:

// var insertPos = m + n - 1;
// m--; n--;
// while (n >= 0) {
//     nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
// }

// var merge = function(nums1, m, nums2, n) {
//     let idx1 = m - 1, idx2 = n - 1, idx3 = m + n - 1;
//     while (idx2 >= 0) {
//       nums1[idx3--] = nums1[idx1] > nums2[idx2]
//         ? nums1[idx1--]
//         : nums2[idx2--];
//     }
//   };

// let p1 = m - 1;
// let p2 = n - 1;
// for (let i = nums1.length - 1; i >= 0; i--) {
//   if (p1 >= 0 && nums1[p1] >= nums2[p2]) {
//     nums1[i] = nums1[p1];
//     p1--;
//   } else if (p2 >= 0) {
//     nums1[i] = nums2[p2];
//     p2--;
//   }
// }
