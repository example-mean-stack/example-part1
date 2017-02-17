//Import and declare express
var express = require('express');
var app = express();

//Provide static files for client accessible
app.use('/public', express.static('bower_components'));
app.use(express.static('app'));

//Provide route to index page to app/Index.html
app.get('/', function(request, response) {
    response.render('Index.html', {});
});
//listen to port 8000
app.listen(8000, function() {
    console.log('Express server started!!!');
});
