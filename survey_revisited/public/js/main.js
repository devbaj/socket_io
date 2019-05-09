$(document).ready(function(){
	console.log("ready");
	const socket = io();
	socket.on('greet', function(data){
		console.log(data.msg);
	})
	$('button').click(function(){
		socket.emit('submit', $('form').serializeArray());
		return false;
	})
	socket.on('result', data => {
		console.log('server emitted results');
		console.log(data);
		$('.results').html(`<p>You emitted the following information to the server: name: ${ data.data.name }</p><p>Your lucky number emitted by the server is ${ data.num }`);
	});
});