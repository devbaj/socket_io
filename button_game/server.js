const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const server = app.listen(8000);
const io = require('socket.io')(server);
var counter = 0;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var presses = 0;
app.get('/', (req,res) => {
	res.render('index', {count: presses});
});
io.on('connect', socket => {
	socket.emit('greet', {msg: 'socket opened', count: presses});
	socket.on('press', () => {
		presses++;
		io.emit('updateCount', {count: presses});
	})
	socket.on('reset', () => {
		presses = 0;
		io.emit('updateCount', {count: presses})
	})
})