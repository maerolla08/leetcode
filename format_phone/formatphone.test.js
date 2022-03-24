const formatPhone = require('./formatphone');

test('positive', () => {
    expect(formatPhone(1234567890)).toEqual("(123)456-7890");
});