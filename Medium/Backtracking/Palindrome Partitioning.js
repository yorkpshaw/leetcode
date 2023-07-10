/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {

    const isPalindrome = (s, i, j) => {
        while (i < j) {
            if (s[i] !== s[j]) {
            return false;
            }
            i++;
            j--;
        }
    return true;
    };
    const result = [];

    const dfs = (i, s, slate) => {
        // base case
        if (i === s.length) {
            result.push(slate.slice());
            return;
        }

        // dfs recursive case
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s, i, j)) {
                slate.push(s.slice(i, j + 1));
                dfs(j + 1, s, slate);
                slate.pop();
            }
        }
    }

    dfs(0, s, []);
    return result;
};

/*
var partition = function(s) {
    const output = []; // Final output with all partitions
    const partitions = []; // Partitions containing palindromes
    const isPalindrome = str => str === str.split('').reverse().join(''); // Palindrome check helper function
    const findPalindrome = (str, start, parts, result) => {
        if (start === str.length) {
            result.push([...parts])
            return;
        }

        for (let i = start + 1; i <= str.length; i++) {
            const target = str.substring(start, i);
            if (isPalindrome(target)) {
                parts.push(target);
                findPalindrome(str, i, parts, result);
                parts.pop();
            }
        }
    }

        // string: 'aab'
        // start = 0 will find palindrome in 'a', 'aa', 'aab'
        // start = 1 will find palindrome in      'a',  'ab'
        // start = 2 will find palindrome in            'b'

    findPalindrome(s, 0, partitions, output);

    return output;
};
*/

/* https://leetcode.com/problems/palindrome-partitioning/ */
