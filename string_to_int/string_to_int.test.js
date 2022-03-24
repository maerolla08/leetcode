const stringToInt = require('./string_to_int');

test('123 returns: 321', () => {
    expect(stringToInt(123)).toEqual(321);
});

test('120 returns: 21', () => {
    expect(stringToInt(120)).toEqual(21);
});

test('-321 returns: -123', () => {
    expect(stringToInt(-321)).toEqual(-123);
});