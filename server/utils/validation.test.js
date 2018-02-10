const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var str = 1235;
        var testVal = isRealString(str);

        expect(testVal).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var str = '    ';
        var testVal = isRealString(str);

        expect(testVal).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var str = '    Hello   ';
        var testVal = isRealString(str);

        expect(testVal).toBe(true);
    });
});
