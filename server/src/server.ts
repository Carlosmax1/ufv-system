import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { routes } from "./routes";
import { connectDB } from "./database/db";
import cors from 'cors';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
      'Access-Control-Allow-Header',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).send({});
  }
  next();
})
app.use(routes);

connectDB();
console.log(`[SEVER] Servidor criado em http://localhost:${port}`);

app.listen(port);