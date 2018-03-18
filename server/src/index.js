const http = require('http');
const App = require('./config');

const app = App.express;

const server = http.createServer(app);

const serve = server.listen(process.env.PORT || 3000, (err) => {
  if (err) throw new Error;
  else console.log('successfully connected to port:', process.env.PORT || 3000);
});

// app and serve are exported this way to allow
// jest to listen on new ports
module.exports = { app: app, serve: server };