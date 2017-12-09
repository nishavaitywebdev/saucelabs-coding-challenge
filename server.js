var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var { initiate } = require('./backend');

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.listen(app.get('port'));

initiate(app);
app.listen();
