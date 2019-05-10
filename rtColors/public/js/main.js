$(document).ready( () => {
	console.log('ready');
	var socket = io();
	socket.on('greet', data => {
		console.log(data.msg);
		$('.container').addClass(data.color);
	});
	$('button').click( (event) => {
		console.log('clicked');
		console.log(event.target.id);
		socket.emit('change', {color: event.target.id});
	})
	socket.on('new_color', data => {
		if ($('.conatiner').hasClass('green')) {
			$('.conatiner').removeClass('green');
		}
		if ($('.container').hasClass('red')) {
			$('.container').removeClass('red');
		}
		if ($('.container').hasClass('blue')) {
			$('.container').removeClass('blue');
		}
		$('.container').addClass(data.color);
	})
})