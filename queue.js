function Queue(){
    let collection = [];
    this.printCollection = function(){
        console.log(collection);
    };
    this.enqueue = function(element){
        collection.push(element);
    };
    this.dequeue = function(){
        collection.shift();
    };
    this.size = function(){
        return collection.length;
    };
    this.empty = function(){
        return (collection.length === 0)
    }
}

let q = new Queue();
q.enqueue("mamatha");
q.enqueue("Praveen");
q.enqueue("Aadhya");
q.enqueue("Aditya");
console.log("q size is" + q.size());
q.printCollection();
q.dequeue();
q.printCollection();
console.log(q.size());