const valid_anagram = require('./valid_anagram');

test('car , rac  returns true', () => {
    expect(valid_anagram('car', 'rac')).toEqual(true);
});

test('test, best returns: false', () => {
    expect(valid_anagram('test', 'best')).toEqual(false);
});