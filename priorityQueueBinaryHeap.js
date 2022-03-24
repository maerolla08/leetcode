class Node{
    constructor(val, priority){
        this.value = val;
        this.priority = priority;
    }
    
}

class binaryHeapPriorityQueue{
    constructor(){
        this.values = [];
    }

    swap(index1, index2){
        let temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
        return this.values;
    }

    bubbleup(){
        let index = this.values.length-1;
        while(index>0){
            let parentIndex = Math.floor((index-1)/2);
            if(this.values[parentIndex].priority < this.values[index].priority){

                this.swap(index,parentIndex)
                index = parentIndex;
            }
            else{
                break;
            }
        }
        return 0;
    }

    enqueue(value){
        this.values.push(value);
        this.bubbleup();
        return this.values;
    }

    bubbledown(){
        let parentIndex = 0;
        const length = this.values.length;
        const elementPriority = this.values[0].priority;
        while(true){
            let leftChildIndex = (2*parentIndex)+1;
            let rightChildIndex = (2*parentIndex)+2;
            let leftChildPriority, rightChildPriority;
            let indexToSwap =null;
            //if left child exists, and is greater than element at parentindex, plan to swap with left 
            if(leftChildIndex < length){
                leftChildPriority = this.values[leftChildIndex].priority;
                if(leftChildPriority > elementPriority){
                    indexToSwap = leftChildIndex;
                }
            }
            //if right child exists
            if(rightChildIndex < length){
                rightChildPriority = this.values[rightChildIndex].priority;
                //if right child priority is greater than element at parent and no plans to swap -- or -- right child greater than left child and plans to swap then plan to swap with right child
                if((rightChildPriority > elementPriority && indexToSwap === null) || (rightChildPriority > leftChildPriority && indexToSwap !== null)){
                    indexToSwap = rightChildIndex
                }
            }

            if(indexToSwap === null){
                break;
            }
            this.swap(parentIndex, indexToSwap);
            parentIndex = indexToSwap;
        }

    }

    dequeue(){
        this.swap(0, this.values.length-1);
        console.log(this.values);
        let poppedNode = this.values.pop();
        if(this.values.length >1){
            this.bubbledown();
        }
        return poppedNode;
    
    }
    
}

let h = new binaryHeapPriorityQueue();
let node1 = new Node("7",7);
let node2 = new Node("2", 2);
let node3= new Node("19",19);
let node4 = new Node("100", 100);
let node5 = new Node("36",36);
let node6 = new Node("17", 17);
let node7 = new Node("3",3);
let node8 = new Node("25", 25);
let node9 = new Node("1",1)

h.enqueue(node1);
h.enqueue(node2);
h.enqueue(node3);
h.enqueue(node4);
h.enqueue(node5);
h.enqueue(node6);
h.enqueue(node7);
h.enqueue(node8);
h.enqueue(node9);
console.log(h.values);
console.log(h.dequeue());
console.log(h.values)
