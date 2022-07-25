import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { routes } from "./routes";
import { connectDB } from "./database/db";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR");
  if (req.headers.origin) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  }
  if (req.method === 'OPTIONS') {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
})
app.use(routes);

connectDB();
console.log(`[SEVER] Servidor criado em http://localhost:${port}`);

app.listen(port);