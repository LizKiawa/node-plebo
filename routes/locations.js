const express = require('express');
const bodyParser = require('body-parser');

const locationsRouter = express.Router();

locationsRouter.use(bodyParser.json());

locationsRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res) => {
  res.end('Will send all the campsites to you');
})
.put((req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /campsites');
});

module.exports = locationsRouter;