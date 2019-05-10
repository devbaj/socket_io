module.exports = {
	greet: (io) => {
		console.log('entered broadcasts module');
		io.emit('greet', {msg: "new socket opened"})
	},
	alert_new_user: (io, data) => {
		io.broadcast.emit('new_user_joined', {name: data.new_user})
	},
	send_message: (io, data) => {
		io.broadcast.emit('send_new_message', data)
	}
}