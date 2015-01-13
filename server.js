var express = require('express');
var hbs = require('express-handlebars');
var path = require('path');

var app = express();
var router = express.Router();

app.engine('.hbs', hbs({ defaultLayout: 'layout', extname: '.hbs' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'public')));

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/cognitive', function(req, res) {
  res.render('cognitive');
});

app.use('/', router);

var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 3001);

app.listen(port, host);