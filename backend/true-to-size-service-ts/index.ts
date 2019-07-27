import express = require('express');

const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('Hello world')
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});