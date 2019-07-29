import express = require('express');
import bodyParser = require('body-parser');

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});