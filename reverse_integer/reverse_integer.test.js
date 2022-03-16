const reverse_integer = require('./reverse_integer');

test('123 returns: 321', () => {
    expect(reverse_integer(123)).toEqual(321);
});

test('120 returns: 21', () => {
    expect(reverse_integer(120)).toEqual(21);
});

test('-321 returns: -123', () => {
    expect(reverse_integer(-321)).toEqual(-123);
});