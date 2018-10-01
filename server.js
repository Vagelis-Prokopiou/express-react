const express = require('express');
const app = express();
const port = 5000;
const reverseString = require('./helpers').reverseString;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.get('/', (req, res) => res.send('The server is running.'));

app.get('/api/reverse-string', (request, response) =>
{
  response.json({'string': reverseString(request.query.string)});
});
