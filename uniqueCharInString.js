/*abc2abc*/
/*welcome*/

function uniqueChar(str){
    let obj = {};
    let arr = str.split("")
    for (let i=0; i<arr.length; i++){
       if(obj.hasOwnProperty(arr[i])){
           console.log(arr[i])
           obj[arr[i]] = obj[arr[i]]+1;
       }
       else{
           obj[arr[i]] = 1;
       }
      
    }
    for(let n in obj){
        console.log(`${n}:${obj[n]}`);
         if(obj[n] ===1){
             console.log("jer"+n);
             console.log("val"+obj[n]);
             return n;
         }
    }
}



console.log(uniqueChar("abkcabc"));


