/*
[0,0,0,1,1,1,2,2,3,3,4]
[0,1,2,3,4]
O(n)...O(1)
*/

function removeDuplicates(arrayWithDups){
    let i =0;
    for(let j=1; j<arrayWithDups.length; j++){
        if(arrayWithDups[i] !== arrayWithDups[j]){
            i +=1;
            arrayWithDups[i] = arrayWithDups[j];
        }
    }
    arrayWithDups.splice(i+1,arrayWithDups.length-(i+1));
    return arrayWithDups;
}

console.log(removeDuplicates([0,0,0,1,1,1,2,2,3,3,4]));