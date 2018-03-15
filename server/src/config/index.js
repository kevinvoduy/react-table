const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('../routes');

const middleware = [
  parser.json(),
  parser.urlencoded({ extended: true }),
  express.static(path.resolve(__dirname, '../../../client/public')),
  cors({
    llowedHeaders: 'Content-Type, authorization',
    methods: ['GET, POST'],
  })
];

class App {
  constructor() {
    this.express = express();
    this.mountMiddleware();
    this.mountRoutes();
  }

  mountMiddleware() {
    this.express.use(...middleware);
  }

  mountRoutes() {
    this.express.use('/api', router);
  }
}

module.exports = new App();