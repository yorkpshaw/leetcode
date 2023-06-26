var hasCycle = function(head) {
    
    const seen = new Set(); // The set will have only unique values
    
    function traverse(node) {
        if(seen.has(node)) return true; // If the set has the node already, then it's a cycle
        if(!node) return false; // If the current node is null, then we've hit the end
        seen.add(node); // add the current node
        return traverse(node.next); // move onto the next node and continue checking conditions
    }
    return traverse(head);

};


// Fast slow pointer method
// 3 2 0 4
// s s  
// f   f
//



var hasCycle = function(head) {

let fast = head;
while (fast && fast.next) {
  head = head.next;
  fast = fast.next.next;
  if (head === fast) return true;
}
return false;

};

/* https://leetcode.com/problems/linked-list-cycle/ */