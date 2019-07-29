import express = require('express');
import bodyParser = require('body-parser');

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function loggerMiddleware(request: express.Request, response: express.Response, next: Function) {
  console.log(`${request.method} ${request.path}`);
  next();
}
 
app.use(loggerMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});