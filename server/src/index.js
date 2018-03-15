const http = require('http');
const App = require('./config');

const app = App.express;

const server = http.createServer(app);
const PORT = 3000;

const serve = server.listen(process.env.PORT, (err) => {
  if (err) throw new Error;
  else console.log('successfully connected to port:', PORT);
});

module.exports = { app: app, serve: server };