const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const server = app.listen(8000);
const io = require('socket.io')(server);
var counter = 0;

app.get('/', function(req,res){
	res.sendFile(__dirname + '/public/index.html')
	console.log("sent index");
})
io.on('connection', function(socket){
	socket.emit('greet', {msg: 'socket opened'});
	socket.on('submit', function(data){
		console.log('client emitted form data')
		console.log(data);
		var info = {}
		info.name = data[0].value;
		info.loc = data[1].value;
		info.lang = data[2].value;
		info.comment = data[3].value;
		var num = Math.floor((Math.random() * 100) + 1);
		socket.emit('result', {data: info, num: num})
	});
})