const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', function() {
	it('should reject non string values', function() {
		var res = isRealString(123);
		expect(res).toBeFalsy();
	});

	it('should reject string with only spaces', function() {
		var res = isRealString('   ');
		expect(res).toBeFalsy();
	});

	it('should allow string with non-space characters', function() {
		var res = isRealString('   lotr  ');
		expect(res).toBeTruthy();
	});
});