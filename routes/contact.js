const express = require('express');
const bodyParser = require('body-parser');

const contactRouter = express.Router();

contactRouter.use(bodyParser.json());

contactRouter.route('/')
.all((req, res, next) => { 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res) => {
  res.end('Showing contact info');
});

module.exports = contactRouter;