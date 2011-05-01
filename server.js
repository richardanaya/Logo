express = require('express')

var app = express.createServer()

app.configure( 
    function() {
	app.use(express.static(__dirname + '/root'));
    }
);

app.get(/^.*$/, 
    function(req, res) {
	res.redirect('index.html');
    }
);
app.listen(9753)
