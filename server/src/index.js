import http from 'http'
import App from './config'

const app = App.express;

const server = http.createServer(app);
const PORT = 3000;

server.listen(PORT, (err) => {
  if (err) throw new Error;
  else console.log('Successfully connected on port', PORT);
});

export default app;