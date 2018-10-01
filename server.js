const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', (req, res) => res.send('The server is running.'));

app.get('/api/reverse-string', (request, response) =>
{
  //
  response.send('Api page');
});
