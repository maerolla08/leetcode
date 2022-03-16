var roman_to_int = function(s) {
    const roman = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] && roman[s[i]] < roman[s[i + 1]]) {
            answer = answer + Math.abs(roman[s.charAt(i + 1)] - roman[s.charAt(i)]);
            i++;
        } else {
            answer = answer + roman[s[i]];
        }
    }
    return answer;
};

//const sum = (a, b) => a + b

// console.log(roman_to_int("MCMXCIV"));

module.exports = roman_to_int;