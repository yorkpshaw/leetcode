/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {

    const stack = []

    for(let i = 0; i < s.length; i++){
		// At each iteration, we're going to compare the last character we pushed to the stack with the current letter
        if (stack[stack.length-1]!==s[i]){
		// If it doesn't match, push it to the stack to compare to the next letter
            stack.push(s[i])
        }else{
		// If it does match, pop it off the stack and continue checking the string
            stack.pop()
        }
    }
	// Our answer is whatever letters were never paired
    return stack.join('')


};
