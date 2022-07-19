import express from 'express';
import { Room } from '../models/Rooms';

export async function  GetLAE(req: express.Request, res: express.Response) {
  const { date } = req.params;
}