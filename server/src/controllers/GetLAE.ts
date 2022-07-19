import express from 'express';
import { Room } from '../models/Rooms';

export async function GetLAE(req: express.Request, res: express.Response) {
  const { date } = req.params;
  const query = await Room.find({date_available: date});
  if(!query){
    res.status(200);
    return res.json({result: "ERROR"});
  }
  res.status(404);
  return res.json({result: `Não possue sala disponível na data ${date}`, error: true})
}