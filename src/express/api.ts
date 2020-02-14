import bodyParser from 'body-parser';
import express, { Express } from 'express';

export function server(): Express {
  const server = express();

  server.use(bodyParser.json());

  server.get('/', (req, res) => {
    res.send('Hello world!');
  });

  return server;
}
