/*
Given a String like "Y N Y Y N" where Y denotes if there were any customers at a given hour and N denotes no customers at a given hour, there is a penalty for a hour where it is open and you have a N, and if you close at a certain hour and it turns out the hour had customers. So, for the above string if you had closed at the fifth hour you would have no penalty. However, if you closed at the 4th hour there was a Y and you closed, so you would have a penalty. Given a String and an hour, calculate the penalty.
Second part of the question: Given a string, return the best hour to close for that string i.e., with minimum penalty. It does not matter which hour you return. You can return any of the hours with minimum penalty.

*/

/* part 1 - penalty calculation */
const getPanalty = function(log, closingHour) {
        let penalty = 0;
        //closing hr tarvata close 
        for (let i = 0; i < closingHour; i++) {
            if (log[i] === 'N') {
                penalty++;
            }
        }
        if (log.length > closingHour) {
            for (let j = closingHour; j < log.length; j++) {
                if (log[j] === 'Y') {
                    penalty++;
                }
            }
        }
        return penalty;
    }
    //console.log(getPanalty("YY", 0))

/******************************** */

/* part 2 - best hour */

const getBestClosingTimes = function(log) {
        let penalties = [];
        for (let i = 0; i < log.length + 1; i++) {
            penalties.push(getPanalty(log, i));
        }
        //  console.log(penalties);
        return penalties.indexOf(Math.min(...penalties));
    }
    //console.log(getBestClosingTimes("NN"))
    /******************************** */

/******************************** */

/* part 3 - get penalty array for pattern */

const getBestClosingTimesArray = function(log) {
    let logArray = log.split(/\r?\n/);
    let cleanLogArray = []

    for (let i = 0; i < logArray.length; i++) {
        cleanLogArray.push(logArray[i].replace(/BEGIN/g, '').replace(/END/g, ''));
    }
    console.log(cleanLogArray);
    let bestClosingTimes = [];
    for (let i = 0; i < cleanLogArray.length; i++) {
        bestClosingTimes.push(getBestClosingTimes(cleanLogArray[i]));
    }
    return bestClosingTimes;
}
console.log(getBestClosingTimesArray("BEGINYYEND\nBEGINNNEND"))
    /******************************** */

//module.exports = getBestClosingTimes;