const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// const redis = require("redis");
// const client = redis.createClient();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const {
  TrueToSizeRouter,
} = require('./src/routers');

// const MY_KEY = 'DANSKEY';

// app.get('/', function (req, res) {
//   client.set(MY_KEY, "this is a set value and redis is working", redis.print);

//   client.get(MY_KEY, (err, rep) => {
//     console.log('responce recived', rep)
//   })
//   res.json({
//     message: 'successful'
//   })
// })

app.use('/trueToSizes', TrueToSizeRouter);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

module.exports = app;
