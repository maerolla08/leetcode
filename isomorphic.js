/*
1.check length -- length should be equal
2.create a character map with strings1s chars as key and str2 chars as values
*/

function isomorphic(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    var map = {};
    for(var i = 0; i < str1.length; i++) {
        var a = str1[i]; 
        var b = str2[i];
        if (typeof map[a] === "undefined") {
            map[a] = b;

        // check for error in first tuple ("ABB", "XYZ")
        } else if (map[a] !== b) {
            return false;
        }

       //check for error in second tuple ("ABC", "XYY")
        // for (var key in map) {
        //     if (key !== a && b === map[key]) {
        //         return false;
        //     }
        // } 
    }
    return true;
}

console.log(isomorphic("ABC", "XYZ")); //true
console.log(isomorphic("ABCCBA", "XYZZYX")); //true
console.log(isomorphic("ABCABC", "XYXXYX")); // false