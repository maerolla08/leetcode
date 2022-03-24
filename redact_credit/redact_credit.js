/*
Given a String like "Y N Y Y N" where Y denotes if there were any customers at a given hour and N denotes no customers at a given hour, there is a penalty for a hour where it is open and you have a N, and if you close at a certain hour and it turns out the hour had customers. So, for the above string if you had closed at the fifth hour you would have no penalty. However, if you closed at the 4th hour there was a Y and you closed, so you would have a penalty. Given a String and an hour, calculate the penalty.
Second part of the question: Given a string, return the best hour to close for that string i.e., with minimum penalty. It does not matter which hour you return. You can return any of the hours with minimum penalty.

*/

/* part 1 - penalty calculation */
const redactCredit = function(str) {
    let words = str.split(" ");
    retractedWords = [];
    words.forEach(element => {
        //visa or amex or master card
        if ((element.length >= 13 && element.length <= 16) &&
            ((element.startsWith('4') && (element.length === 13 || element.length === 16)) ||
                ((element.startsWith('34') || element.startsWith('37')) && (element.length === 15)) ||
                ((Number(element.substring(0, 2)) >= 51 && Number(element.substring(0, 2)) <= 55) ||
                    (Number(element.substring(0, 4)) >= 2221 && Number(element.substring(0, 4)) <= 2720)))) {
            retractedWords.push(element.slice(0, -4).replace(/[0-9]/g, 'X') + element.substring(element.length - 4));
        } else {
            retractedWords.push(element);
        }
    });
    return retractedWords.join(" ")
}
console.log(redactCredit("1234567890123456 is a number"));
console.log(redactCredit("basic_string 12345 noredaction"));
console.log(redactCredit("an embedded number 1234567890123456 in the string"));
console.log(redactCredit("4234567890123456 is a number"));
// this case will fail -- i will need to find elements > length 13 and find regex pattern = /\d{13,16}/g and then replace digits with xxx
//console.log(redactCredit("an embedded number 1234567890123456 in the string"));

/******************************** */

/* part 2 - best hour */


/******************************** */

//module.exports = redactCredit;