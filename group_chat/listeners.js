module.exports = (io) => {
	io.on('connect', socket => {
		var broadcast = require('./emitters/broadcasts');
		var emit = require('./emitters/emits');
		console.log('connected to client')
		// * For single-client emits, emit.[callback(socket)]
		// * For broadcasts to all but specific client, broadcast.[callback(socket)]
		// * For broadcast to all: broadcast.[callback(io)]
		emit.greet(socket);
		broadcast.greet(io);
		socket.on('user_join', data => {
			console.log(data);
			broadcast.alert_new_user(socket, data);
		})
		socket.on('new_message', data => {
			console.log(data);
			broadcast.send_message(socket, data);
		})
	})
}