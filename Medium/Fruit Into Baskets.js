var totalFruit = function(fruits) {
    let basket = new Map();
    // {1: 1, 2: 1}

    const countFruit = () => {
        let total = 0;
        basket.forEach(val => total += val)

        return total;
    };

    const memo = new Map();

    const dp = (i, chosen /* boolean */) => {
        // check if out of bounds
        if (i > fruits.length - 1) return countFruit()
        const curr = fruits[i];

        if (basket.size >= 2 && !basket.has(curr)) {
            return countFruit()
        }

       const choices = []
       const key = i;

       if (memo.has(key)) return memo.get(key);

        if (chosen) { // add 2nd fruit to basket
            basket.set(curr, (basket.get(curr) ?? 0) + 1);


            choices.push(dp(i + 1, chosen))
        } else {
            basket.set(curr, 1) // add fruit
            choices.push(dp(i + 1, true));

            basket = new Map()
            choices.push(dp(i + 1, false))
        }


        let res = Math.max(...choices)
        memo.set(key, res)
        // return largest of choices
        return res
    }

    return dp(0, false)
};

//totalFruit([1,2,3,2,2])
//totalFruit([0,1,2,2])
//totalFruit([1,2,1])
totalFruit([0,1,6,6,4,4,6])
