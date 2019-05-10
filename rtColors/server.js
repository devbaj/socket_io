const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const server = app.listen(8000, () => {
	console.log('listening on port 8000');
});
const io = require('socket.io')(server);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
	res.render('index');
})

var color = "";
console.log(color);
io.on('connect', (socket) => {
	socket.emit('greet', {msg: 'socket opened', color: color});
	socket.on('change', data => {
		console.log(data);
		color = data.color;
		io.emit('new_color', {color: data.color})
	})
});
