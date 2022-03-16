const unique_char = require('./unique_char');

test('leetcode returns: 0', () => {
    expect(unique_char('leetcode')).toEqual(0);
});

test('test returns: 1', () => {
    expect(unique_char('test')).toEqual(1);
});

test('bubbu returns: -1', () => {
    expect(unique_char('bubbu')).toEqual(-1);
});