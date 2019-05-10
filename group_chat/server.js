const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
require('./routes')(app);
const server = app.listen(8000, () => {
	console.log("server listening on port 8000");
})
const io = require('socket.io')(server);
require('./listeners.js/index.js')(io);