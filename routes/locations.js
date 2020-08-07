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
  res.end('Showing all locations');
})
app.get('/:locationId', (req, res) => {
  res.end(`Showing ${req.params.locationId} details`);
})
app.put('/:locationId', (req, res) => {
  res.end(`Updating ${req.body.name} details`);
})


module.exports = locationsRouter;