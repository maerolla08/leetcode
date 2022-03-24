class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
    
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // adds an element at the end 
    // of list 
    add(data) 
    { 
        // creates a new node 
        var node = new Node(data); 

        // to store current node 
        var current; 

        // if list is Empty add the 
        // data and make it head 
        if (this.head == null) 
            this.head = node; 
        else { 
            current = this.head; 

            // iterate to the end of the 
            // list 
            while (current.next) { 
                current = current.next; 
            } 

            // add node 
            current.next = node; 
        } 
        this.size++; 
    } 

    // insert data at the position index 
    // of the list 
    insertAt(data, index) 
    { 
        if (index > 0 && index > this.size) 
            return false; 
        else { 
            // creates a new node 
            var node = new Node(data); 
            var curr, prev; 

            curr = this.head; 

            // add the data to the 
            // first index 
            if (index == 0) { 
                node.next = this.head; 
                this.head = node; 
            } else { 
                curr = this.head; 
                var i = 0; 

                // iterate over the list to find 
                // the position to insert 
                while (i < index) { 
                    i++; 
                    prev = curr; 
                    curr = curr.next; 
                } 

                // adding an data 
                node.next = curr; 
                prev.next = node; 
            } 
            this.size++; 
        } 
    }

    

    insertAtFirst(value){
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;   
    }
    
    // removes an element from the 
    // specified location 
    removeFrom(index) 
    { 
        if (index > 0 && index > this.size) 
            return -1; 
        else { 
            var curr, prev, i = 0; 
            curr = this.head; 
            prev = curr; 
    
            // deleting first element 
            if (index === 0) { 
                this.head = curr.next; 
            } else { 
                // iterate over the list to the 
                // position to removce an element 
                while (i < index) { 
                    i++; 
                    prev = curr; 
                    curr = curr.next; 
                } 
    
                // remove the element 
                prev.next = curr.next; 
            } 
            this.size--; 
    
            // return the remove element 
            return curr.element; 
        } 
    } 


    removefromEndIndex(n) {
        console.log(this.size);
        n = this.size-(n+1);
        console.log(n);
        this.removeFrom(n); 
     };

    // removes a given element from the 
    // list 
    removeElement(data) 
    { 
        var current = this.head; 
        var prev = null; 
    
        // iterate over the list 
        while (current != null) { 
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.data === data) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
                return current.data; 
            } 
            prev = current; 
            current = current.next; 
        } 
        return -1; 
    } 

    removeFromFirst(){
        let head = this.head;
        this.head = this.head.next;
        return head;
    }

    // finds the index of element 
    indexOf(element) 
    { 
        var count = 0; 
        var current = this.head; 

        // iterae over the list 
        while (current != null) { 
            // compare each element of the list 
            // with given element 
            if (current.element === element) 
                return count; 
            count++; 
            current = current.next; 
        } 

        // not found 
        return -1; 
    } 

    // checks the list for empty 
    isEmpty() 
    { 
        return this.size == 0; 
    }

    
    // gives the size of the list 
    size_of_list() 
    { 
        console.log(this.size); 
    } 

    // prints the list items 
    printList() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.data + " "; 
            curr = curr.next; 
        } 
        console.log(str); 
    } 

    // O(n) time & O(1) space
    reverse() {
        let cur = this.head;
        let previous = null;
        let tmp = null;
    
        while (cur) {
        // save next before we overwrite node.next!
        tmp = cur.next;
        // reverse pointer
        cur.next = previous;
        // step forward in the list
        previous = cur;
        cur = tmp;
        }
        this.head = previous;
    }

    // size() {
    //     let count = 0; 
    //     let node = this.head;
    //     while (node) {
    //         count++;
    //         node = node.next
    //     }
    //     return count;
    // }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head;
    }

    
    
}

// let node1 = new Node(2);
// let node2 = new Node(4);
// node1.next = node2;

// let list = new linkedList(node1);
// console.log(list.head.next.data);



/////////////
// creating an object for the 
// Linkedlist class 
var ll = new linkedList(); 

// testing isEmpty on an empty list 
// returns true 
console.log(ll.isEmpty()); 

// adding element to the list 
ll.add(10); 

// prints 10 
ll.printList(); 

// returns 1 
console.log(ll.size_of_list()); 

// adding more elements to the list 
ll.add(20); 
ll.add(30); 
ll.add(40); 
ll.add(50); 
console.log(ll);
// returns 10 20 30 40 50 
ll.printList(); 

// prints 50 from the list 
console.log("is element removed ?" + ll.removeElement(50)); 

// prints 10 20 30 40 
ll.printList(); 

// returns 3 
console.log("Index of 40 " + ll.indexOf(40)); 

// insert 60 at second position 
// ll contains 10 20 60 30 40 
ll.insertAt(60, 2); 

ll.printList(); 

// returns false 
console.log("is List Empty ? " + ll.isEmpty()); 

// remove 3rd element from the list 
console.log(ll.removeFrom(3)); 

// prints 10 20 60 40 
ll.printList(); 

console.log(ll.removefromEndIndex(3));
ll.printList(); 

ll.reverse();
ll.printList(); 




