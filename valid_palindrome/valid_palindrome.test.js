const valid_palindrome = require('./valid_palindrome');

test('car , rac  returns true', () => {
    expect(valid_palindrome('')).toEqual(true);
});

test('test, best returns: false', () => {
    expect(valid_palindrome('test')).toEqual(false);
});

test('test, best returns: false', () => {
    expect(valid_palindrome("A man, a plan, a canal: Panama")).toEqual(true);
});