const longestCommonPrefix = require('./longest_common_prefix');

test('case1', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual('fl');
});