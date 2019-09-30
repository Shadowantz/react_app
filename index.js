const express = require('express');
const app = express();
const port = 5000;

app.get('/test', confirmGetReceipt);

function confirmGetReceipt(req, res) {
  res.send({key1: 'Test response'});
  console.log('I received a get request!');
}

app.listen(port, () => console.log('Listening on', port));
