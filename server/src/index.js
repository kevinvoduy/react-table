import http from 'http'
import App from './config'

const app = App.express;

const server = http.createServer(app);
const PORT = 3000;

const serve = server.listen(PORT, (err) => {
  if (err) throw new Error;
  else console.log('successfully connected to port:', PORT);
});

module.exports = { app: app, serve: server };