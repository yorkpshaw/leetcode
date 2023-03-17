/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var ans=0;
    accounts.forEach(item=>{
       let temp=item.reduce((acc,prev)=>{
            return acc+prev;
        },0);
        ans=Math.max(ans,temp);
    })
    return ans;
}

    //   return Math.max(...accounts.map(customer=>customer.reduce((a,b)=>a+b)))
