const reverse_string = require('./reverse_string');

test('["h","e","l","l","o"] returns: ["o","l","l","e","h"]', () => {
    expect(reverse_string(["h", "e", "l", "l", "o"])).toEqual(["o", "l", "l", "e", "h"]);
});

test('["H","a","n","n","a","h"] returns: ["h","a","n","n","a","H"]', () => {
    expect(reverse_string(["H", "a", "n", "n", "a", "h"])).toEqual(["h", "a", "n", "n", "a", "H"]);
});