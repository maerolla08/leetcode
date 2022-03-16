const roman_to_int = require('./roman_to_int');

test('roman_to_int("III"]) returns: 3', () => {
    expect(roman_to_int("III")).toEqual(3);
});

test('roman_to_int("MCMXCIV"]) returns: 1995', () => {
    expect(roman_to_int("MCMXCIV")).toEqual(1994);
});