var express = require('express');
var app = express();

/*  Setting Up Handlebars template  */
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

/*  Setting Up public directory as static. This must contains data only to be rendered at client side */ 
app.use(express.static(__dirname + '/public'));

/*  Setting Up the port */
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
		 app.get('port') + '; press Ctrl-C to terminate.' );
});

app.get('/', function(req, res) {
  res.render('foodieChef');
});

// custom 404 page
app.use(function(req, res, next){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

