const express = require('express');

const app = express();

app.use(function(request, response, next){
   console.log(`${request.method} - ${request.path} - ${new Date().toString()}`);
next();
});

app.get('/hello/:name', function (request, response) {
  const name = request.params.name || 'World!';
    response.send(`Hello ${name}`);
});

const PORT = 4545;
app.listen(PORT, () => {
  console.log(`Server is up and running, listening on http://localhost:${PORT}`);
});
