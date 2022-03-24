/*
Given a String like "Y N Y Y N" where Y denotes if there were any customers at a given hour and N denotes no customers at a given hour, there is a penalty for a hour where it is open and you have a N, and if you close at a certain hour and it turns out the hour had customers. So, for the above string if you had closed at the fifth hour you would have no penalty. However, if you closed at the 4th hour there was a Y and you closed, so you would have a penalty. Given a String and an hour, calculate the penalty.
Second part of the question: Given a string, return the best hour to close for that string i.e., with minimum penalty. It does not matter which hour you return. You can return any of the hours with minimum penalty.

*/

/* part 1 - penalty calculation */
userdata = { 'a': ['c', 'd'], 'b': ['d', 'a', 'c'], 'c': ['a', 'b'], 'd': ['c', 'a', 'b'] };
const has_mutual_first_choice = function(username) {
    if (username === userdata[userdata[username][0]][0]) {
        return true;
    }
    return false;
}

const has_mutual_pair_for_rank = function(username, rank) {
    if (username === userdata[userdata[username][rank]][rank]) {
        return true;
    }
    return false;
}
console.log(has_mutual_pair_for_rank('c', 1));

/******************************** */


//module.exports = has_mutual_first_choice;