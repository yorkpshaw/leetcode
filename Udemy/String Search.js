function naiveSearch(long, short){

    var count = 0;

    // outer loop variable i over long string
    for(var i = 0; i < long.length; i++){
        // inner loop variable j over short string
        for(var j = 0; j < short.length; j++){
            // If the characters don't match, then break and move i forward
            // short[j] represents the current index of short string
            // j keeps incrementing if things are equal
            //
           if(short[j] !== long[i+j]) break;
                // once j is equal to length of short string, you are on last iteration so increment count
                // keep looping
           if(j === short.length - 1) count++;
        }
    }
    return count;
}
        //   i              j
naiveSearch("lorie loled", "lol")


// Count number of times a smaller string (substring) appears in a string
