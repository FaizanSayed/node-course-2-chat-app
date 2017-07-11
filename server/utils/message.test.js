var expect = require('expect');

var {generateMessage} = require('./message');

describe('generate message', () => {
	it('should generate correct message object', () => {
		var from = 'TestUser';
		var text = 'This is a test message.';
		var message = generateMessage(from, text);
		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});
	});
});