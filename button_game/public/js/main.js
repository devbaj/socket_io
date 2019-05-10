$(document).ready( ()=> {
	const socket = io();
	socket.on('greet', data => {
		console.log(data.msg);
		$('.count').html(data.count);
	})
	$('.epic').click( () => {
		socket.emit('press');
		return false;
	})
	socket.on('updateCount', data => {
		$('.count').html(data.count);
	})
	$('.reset').click( () => {
		socket.emit('reset');
		return false;
	})
})