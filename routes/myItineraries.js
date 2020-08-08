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
  res.end('Showing all itineraries');
});

myItinerariesRouter.route('/:itineraryId')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.delete((req, res) => {
  res.end('Deleting itinerary ${req.params.itineraryId}');
});

module.exports = myItinerariesRouter;