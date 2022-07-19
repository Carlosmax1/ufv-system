import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { routes } from "./routes";
import { connectDB } from "./database/db";
import {randomUUID }from 'crypto';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);

console.log(randomUUID);

connectDB();
console.log(`[SEVER] Servidor criado em http://localhost:${port}`);

app.listen(port);