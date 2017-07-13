var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generate message', () => {
	it('should generate correct message object', () => {
		var from = 'TestUser';
		var text = 'This is a test message.';
		var message = generateMessage(from, text);
		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});
	});
});

describe('generate location message', () => {
	it('should generate correct location object', () => {
		var from = 'TestUser';
		var latitude = '1', longitude = '2';
		var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
		var message = generateLocationMessage(from, latitude, longitude);
		
		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, url});
	});
});