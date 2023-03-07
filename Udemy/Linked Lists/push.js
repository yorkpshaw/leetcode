// Pseudocode:
// This function should accept a value
// Create a new node using the value passed to the function
// If there is no head property on the list, set the head and tail to be the newly created node
// If there is a head, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
// Increment the length by 1

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        // Create a new node with a value passed into the node
        var newNode = new Node(val);

        // If it doesn't exist, the node will be passed in as both head and tail since it's the first
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;

        // Otherwise, take the
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}
