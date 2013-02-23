
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


/* Rutas */
app.get('/', function(req, res){
	res.render('index',{
		title : 'SPARTACUS DIOSES DE LA ARENA'
	});
});

app.get('/galeria', function(req, res){
	res.render('galeria',{
		title : 'SPARTACUS DIOSES DE LA ARENA'
	});
});

app.get('/personajes', function(req, res){
	res.render('personajes',{
		title : "SPARTACUS DIOSES DE LA ARENA"
	});
});

app.get('/frases', function(req, res){
	res.render('frases',{
		title : "SPARTACUS DIOSES DE LA ARENA"
	});
});

app.get('/inicio', function(req, res){
	res.render('inicio',{
		title : "SPARTACUS DIOSES DE LA ARENA"
	});
});

app.get('/temporadas', function(req, res){
	res.render('temporadas',{
		title : "SPARTACUS DIOSES DE LA ARENA"
	});
});
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
