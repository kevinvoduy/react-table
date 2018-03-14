import express from 'express';
import parser from 'body-parser';
import path from 'path'

const middleware = [
  parser.json(),
  parser.urlencoded({ extended: true }),
  express.static(path.resolve(__dirname, '../../../client/public')),
];

class App {
  constructor() {
    this.express = express();
    this.mountMiddleware();
  }

  mountMiddleware() {
    this.express.use(...middleware);
  }
}

export default new App();