/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    if (prices.length === 1) return 0;
    let i = 0;
    let j = 1;
    let difference = 0;

    while (j < prices.length) {
        if (prices[i] >= prices[j]) {
            i = j; // Need to reassign i to j instead of incrementing i
            j++;
        } else if (difference < prices[j] - prices[i]) {
            difference = prices[j] - prices[i];
            j++;
        } else {
            j++
        }
    }

    return difference



};

// If the elements keep getting smaller, return 0
// Look for a drop off
// [1,2,5,2,7]
// [5,1,7,2,8]
// If i is larger than j, increment i and j
// If i is smaller than j, reassign temp and move only j forward
// Need some kind of a temp variable to be reassigned, set at 0
// If the difference between two numbers is bigger, reassign
// Use two pointers to keep one on a value to find difference
// [7,3,1,5,6]
// The biggest difference will usually be lowest number
// [7,2,6,6,1]
// the second pointer will have to stop at length-1, while j < prices.length

//  i j
// [7,1,5,3,6,4]
// j is smaller than i, we want to increment i and j

//    i j
// [7,1,5,3,6,4]
// j is larger, reassign temp to difference between j and i, and move j forward

//    i   j
// [7,1,5,3,6,4]
// Difference of 2 is smaller than 4, keep j going

//    i     j
// [7,1,5,3,6,4]
// difference of 5 is greater than 4, reassign temp

//    i       j
// [7,1,5,3,6,4]
// We hit the end, nothing happens, return temp

// if i >= j, i++ and j++

// otherwise, calculate j - i
// if prices[j] - prices[i] > difference
// difference = prices[j] - prices[i]
// keep j++ regardless
