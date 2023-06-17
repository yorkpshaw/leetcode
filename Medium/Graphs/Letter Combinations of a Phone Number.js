const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

var letterCombinations = function(D) {
    let len = D.length, ans = []
    if (!len) return []
    const dfs = (pos, str) => {
        if (pos === len) ans.push(str)
        else {
            let letters = L[D[pos]]
            for (let i = 0; i < letters.length; i++)
                dfs(pos+1,str+letters[i])
        }
    }
    dfs(0,"")
    return ans
};


/* 
Output will be an array
Each time a digit is pushed,
2     3     4
abc  def   ghi
push this into the array:
first digit of 2, first digit of 3, first digit of 4 adg
first digit of 2, first digit of 3, second digit of 4 adh
first digit of 2, first digit of 3, third digit of 4 adi

first digit of 2, second digit of 3, first digit of 4 aeg
first digit of 2, second digit of 3, second digit of 4 aeh
first digit of 2, second digit of 3, third digit of 4 aei

first digit of 2, third digit of 3, first digit of 4 afg
first digit of 2, third digit of 3, first digit of 4 afh
first digit of 2, third digit of 3, first digit of 4 afi


Each time a digit is added, that increases the number of combinations

2[0] - 3[0] - 4[0,1,2]
2[0] - 3[0,1,2] - 4[0,1,2]
2[0,1,2] - 3[0,1,2] - 4[0,1,2]

How can we represent the values? And mapping 2 to ABC, 3 to DEF, 4 to GHI
(2, (A,B,C))

Visit first letter of each number until the last, once that is completed
    Move to the next digit (second to last), since we have already visited the first letter, then go to second letter and recursively add all letter combos for all digits after
        Move to next digit (third to last), and recursively add all letter combos for all digits after

    Keep repeating the process for each digit until the first one


*/
/* https://leetcode.com/problems/letter-combinations-of-a-phone-number/ */
