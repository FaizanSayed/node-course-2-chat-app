const expect = require('expect');
const {Users} = require('./users');

describe('Users', function() {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Mike',
			room: 'Node Course'
		},{
			id: '2',
			name: 'Jen',
			room: 'React Course'
		},{
			id: '3',
			name: 'Julie',
			room: 'Node Course'
		}];
	});

	it('should add a new user', function() {
		var userInstance = new Users();
		var user = {
			id: '123',
			name: 'Faizan',
			room: 'The Office Fans'
		};

		var resUser = userInstance.addUser(user.id, user.name, user.room);

		expect(userInstance.users).toEqual([user]);
	});

	it('should remove a user', function() {
		var userId = '1';
		var user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove a user', function() {
		var userId = '4';
		var user = users.removeUser(userId);

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find user', function() {
		var user = users.getUser('2');

		expect(user.id).toBe('2');
	});

	it('should not find user', function() {
		var user = users.getUser('4');

		expect(user).toNotExist();
	});

	it('should return names for node course', function() {
		var userList = users.getUserList('Node Course');

		expect(userList).toEqual(['Mike', 'Julie']);
	});

	it('should return names for react course', function() {
		var userList = users.getUserList('React Course');

		expect(userList).toEqual(['Jen']);
	});
});