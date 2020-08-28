var app = require('express')();
var fileUpload = require('express-fileupload');
var mongoose = require('mongoose');

var server = require('http').Server(app);

app.use(fileUpload());

server.listen(80);

mongoose.connect('mongodb://todoExample:admin@cluster0-shard-00-00.9bsfc.mongodb.net:27017,cluster0-shard-00-01.9bsfc.mongodb.net:27017,cluster0-shard-00-02.9bsfc.mongodb.net:27017/users?ssl=true&replicaSet=atlas-ppqgkn-shard-0&authSource=admin&retryWrites=true&w=majority');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var template = require('./template.js');
app.get('/template', template.get);

var upload = require('./upload.js');
app.post('/', upload.post);