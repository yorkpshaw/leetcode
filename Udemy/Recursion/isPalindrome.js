function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!

        if(str.length === 1) return true;
      if(str.length === 2) return str[0] === str[1];
      if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
      return false;
  }


// 'tacocat'
// 'acocat' t
// 'cocat' a t
// 'ocat' c a t
// 'cat' o c a t
// 'at' c o c a t
// 't' a c o c a t



// 'palindrome'
// 'alindrome' p
// 'lindrome' a p
// 'indrome' l a p
// 'ndrome' i l a p
// 'drome' n i l a p
// 'rome' d n i l a p
// 'ome' r d n i l a p
// 'me' o r d n i l a p
// 'e' m o r d n i l a p
