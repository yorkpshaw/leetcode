/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {

//     const firstString = strs[0].split('');
//     let i = 0;
//     let mcp = '';

//     while (firstString[i]) {
//         for (let j = 1; j < strs.length; j++) {
//             let secondString = strs[j].split('');
//             if (secondString[j] == firstString[i]) {
//                 mcp += secondString[j];
//             }
//             i++
//         }
//         return mcp;
//     }
// };
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';

    let mcp = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(mcp) !== 0) {
            mcp = mcp.substring(0, mcp.length - 1);
        }
    }

    return mcp;
};

// Create an empty string to be pushed into
// Split the first element's characters
// Iterate over all the first element's characters
// Loop through the rest doing the same
// While iterating,
// When characters do not match, stop the loop
// When everything is finished looping, return the output string
// Return an output string with longest common prefix
