module.exports = {
	greet: socket => {
		console.log('entered emits module');
		socket.emit('greet', {msg: "socket opened"});
	}
}