class Node{
    constructor(val, priority){
        this.value = val;
        this.priority = priority;
        this.next = null;
    }
    
}

class linkedList{
    constructor(){
        this.first = null;
    }

    insert(value, priority){
        const newNode = new Node(value, priority)
        if(!this.first || priority > this.first.priority){
            newNode.next = this.first;
            this.first = newNode;
        }
        else{
            let pointer = this.first
            while(pointer.next && pointer.next.priority > priority){
                pointer = pointer.next;
            }
            
            newNode.next = pointer.next;
            pointer.next = newNode;
        }
    }

    remove(){
        let first = this.first;
        this.first = this.first.next;
        return first;
    }
    
}

let LL = new linkedList();
 LL.insert("PRav",1);
LL.insert("MAma", 2);
LL.insert("hey",4);
console.log(LL);
console.log(LL.remove());
console.log(LL)
