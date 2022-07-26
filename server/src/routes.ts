import express from "express";
import { status } from "./controllers/StatusController";
import { createLAE } from "./controllers/CreateLAE";
import { GetLAE } from "./controllers/GetLAE";
import { Auth } from "./middleware/middleware";

export const routes = express.Router();

routes.get('/', status);
routes.post('/api/v1/create', Auth, createLAE);
routes.get('/api/v1/lae/:date', GetLAE); // 'DIA-MES-ANO'