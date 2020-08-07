const express = require('express');
const bodyParser = require('body-parser');

const myItinerariesRouter = express.Router();

myItinerariesRouter.use(bodyParser.json());

myItinerariesRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res) => {
  res.end('Will send all the campsites to you');
})
.delete((req, res) => {
  res.end('Deleting all campsites');
});

module.exports = myItinerariesRouter;