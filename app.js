var express = require('express');
var app = express();


// app.js


app.set('view engine', 'html');
app.use(express.static('public'));



app.get('/', function(req, res){
    res.sendfile('views/index.html');
});

app.get('/users', function(req, res){
    res.sendfile('views/users.html');
});



app.listen(3000, function (err) {
	if (err) {
		console.log(err);
	} else{
		console.log("app listen on port 3000")
	}
});
