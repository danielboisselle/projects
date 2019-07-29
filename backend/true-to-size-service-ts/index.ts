import bodyParser = require("body-parser");
import express = require("express");

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function loggerMiddleware(request: express.Request, response: express.Response, next: () => void) {
  console.log(`${request.method} ${request.path}`);
  next();
}

app.use(loggerMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
