$(document).ready( () => {
	var socket = io();
	socket.on('greet', data => {
		console.log(data.msg);
	})
	var user = prompt( 'Please enter your name:' )
	socket.emit('user_join', {new_user: user})
	socket.on('new_user_joined', data => {
		console.log('received new username')
		$('.chat-area').prepend(`<p>${data.name} has joined the chat`)
	});
	$('button').click( () => {
		var message = $('#msg').val();
		$('#msg').val("");
		socket.emit('new_message', {user: user, message: message});
	})
	socket.on('send_new_message', data => {
		console.log(data);
		$('.chat-area').prepend(`<p>${data.user}: ${data.message}</p>`)
	})
})