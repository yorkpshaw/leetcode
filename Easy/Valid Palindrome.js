/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

        s = s.replace(/[^a-z0-9]/gi,"") // Get rid of all special characters and cases
        let left = 0;
        let right = s.length - 1
        while (left < right) {
            if (s[left].toLowerCase() !== s[right].toLowerCase()) { // Lowercase these to get rid of conflict
                return false;
            left++;
            right--;
            }
        }
        return true

    }
    // };

    // Time:
    // Space:
    // Pseudo Code:
    // 1. Create regex to replace special characters with ""
    // 2. Create a left/start pointer
    // 3. Create a right/end pointer
    // 4. Iterate until left < right
    //     -Create condition to see if values of pointers do not equal each other, return false if so
    //     -Increment left pointer, decrement right pointer
    // 5. return true if nothing has been proven false

    // // Base case
    // if(s==null)  return false;
    // // Take in lowercase character...
    // s = s.toLowerCase();
    // // Initialize two pointer variables, left and right and point them with the two ends of the input string...
    // let left = 0;
    // let right = s.length - 1;
    // // Traverse all elements through the loop...
    // while(left < right){
    //     // Move the left pointer to right so it points to a alphanumeric character...
    //     while(left < right && !((s.charAt(left) >= 'a' && s.charAt(left) <= 'z') || (s.charAt(left) >= '0' && s.charAt(left) <= '9'))){
    //         left++;
    //     }
    //     // Similarly move right pointer to left so it also points to a alphanumeric character...
    //     while(left < right && !((s.charAt(right) >= 'a' && s.charAt(right) <= 'z') || (s.charAt(right) >= '0' && s.charAt(right) <= '9'))){
    //         right--;
    //     }
    //     // Check if both the characters are same...
    //     // If it is not equal then the string is not a valid palindrome, hence return false...
    //     if(s.charAt(left) != s.charAt(right)){
    //         return false;
    //     }
    //     // If same, then continue to next iteration and move both pointers to point to next alphanumeric character till left < right...
    //     left++;
    //     right--;
    // }
    // // After loop finishes, the string is said to be palindrome, hence return true...
    // return true;




    // NOT CORRECT!!!!!

        // var str = s.split(" ").join("")


        // if (str.length === 1) return true;
        // if (str.length === 2) return str[0] = str[-1];

        // if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
        // return false;
