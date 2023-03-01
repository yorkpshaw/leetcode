function isSubsequence(str1, str2) {

    if (!str1) {
        return true
    }

    let i = 0;
    let j = 0;

    let res = '';

    while (j < str2.length) {
        if (str2[j] === str1[i]) {
            res = res.concat(str2[j]);
            i++;
            j++;
        } else {
            j++
        }
    }

  return res === str1

}

// Create a str1 argument and a pointer i
// keep looping while j < str2.length
// if str2[j] = str1[i], push str2[j] into the array then increment both
// if the length of res is the same as str1 then you found the match
// otherwise keep j moving
// return false if nothing is true
