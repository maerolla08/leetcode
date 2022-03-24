const needleInHaystack = require('./needle_haystack');

test('case1', () => {
    expect(needleInHaystack("hello", "ll")).toEqual(2);
});

test('case 2', () => {
    expect(needleInHaystack("aaaaa", "bba")).toEqual(-1);
});

test('case 3', () => {
    expect(needleInHaystack("", "")).toEqual(0);
});