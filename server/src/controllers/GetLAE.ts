import express from 'express';
import { Room } from '../models/Rooms';

export async function GetLAE(req: express.Request, res: express.Response) {
  const { date } = req.params;
  const query = await Room.find({date_available: date});
  if(query.length !== 0){
    res.status(200);
    return res.json(query);
  }
  res.status(400);
  return res.json({result: `Não possue sala disponível na data ${date}`, error: true})
}