const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

var letterCombinations = function(D) { // D is the input string number
    let len = D.length, ans = [] // Set len to the length of the string, an answer array to push into
    if (!len) return [] // Edge case
    const dfs = (pos, str) => { // Pos represents index of input string
        if (pos === len) ans.push(str) // pos === len means we've touched the last digit, so push in str
        else { // Everything inside this else block will keep running until it hits the end of the loop, then will check the base cases again
            let letters = L[D[pos]] // letters = L["234"[0]], L["2"] is "abc" so letters = "abc" **************   D is the input string, pos is how we specifically extract a number at 'pos' index, so that we can get the letters it is mapped to 
            for (let i = 0; i < letters.length; i++) // Iterate over "abc"
                dfs(pos+1,str+letters[i]) // call dfs again (which is not in the loop block). pos+1 is L["3"] = "def" on next go around. pos+1 because trying to match length base case
                                          // str+letters[i] is "" + "a" then "a" + "d" then "ad" + "g"
                                          // pos + 1 doesn't happen until letters has fully been looped through
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

    1 A
    1 B
    1 C
    2 A D
    2 A E
    2 A F
    3 A D G
    3 A D H
    3 A D I
    (How does it keep adding?)
    Length is 3, so push those 3 results into the array (How do we know the order of push?)
    -> Call stack where pos is 2 and str is "ae"...
        ae+h, ae+i
    -> Call stack where pos is 1 and str is "a"...
        a+d, a+e, a+f, etc...
    -> Call stack where pos is 0 and str is ""...
        ""



*/
/* https://leetcode.com/problems/letter-combinations-of-a-phone-number/ */