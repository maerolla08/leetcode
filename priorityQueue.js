function Queue(){
    let collection = [];
    this.printCollection = function(){
        console.log(...collection);
    };
    this.enqueue = function(element){
        if(collection.length === 0){
            collection.push(element);
        }
        else{
            let added = false;
            for(let i=0; i<collection.length; i++){
                if(element[1]<collection[i][1]){
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
            }
        }
    };
    this.dequeue = function(){
        collection.shift();
    };
    this.size = function(){
        return collection.length;
    };
    this.isEmpty = function(){
        return (collection.length === 0)
    }
}

let q = new Queue();

q.enqueue(["Aadhya",3]);
q.enqueue(["mamatha",1]);
q.enqueue(["Praveen",2]);
q.enqueue(["Aditya",3]);
console.log("q size is" + q.size());
q.printCollection();
q.dequeue();
q.printCollection();
console.log(q.size());