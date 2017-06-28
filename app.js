const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');


const app = express();
app.set('view engine', 'ejs');

// app.use(function(request, response, next){
//    console.log(`${request.method} - ${request.path} - ${new Date().toString()}`);
// next();
// });

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/hello/:name', function (request, response) {
  const name = request.params.name || 'World!';
    response.send(`Hello ${name}`);
});

app.get('/', function (request, response) {
  response.render('index');
});

app.get('/contact', function(request, response) {
  response.render('contact', {contact: {}});
});

app.post('/contact', function (request, response) {
  response.send('contact', {contact: request.body});
});


const PORT = 4545;
app.listen(PORT, () => {
  console.log(`Server is up and running, listening on http://localhost:${PORT}`);
});
