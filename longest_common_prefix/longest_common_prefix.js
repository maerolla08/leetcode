/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

const longestCommonPrefix = function(strs) {
    let common = strs.shift();

    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < common.length) common = common.slice(0, strs[i].length);

        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][j] !== common[j]) common = common.slice(0, j);
        }
    }
    return common;

}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
module.exports = longestCommonPrefix;