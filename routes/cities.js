const express = require('express');
const bodyParser = require('body-parser');

const citiesRouter = express.Router();

citiesRouter.use(bodyParser.json());

citiesRouter.route('/')
.all((req, res, next) => { 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res) => {
  res.end('Showing all cities');
});

module.exports = citiesRouter;