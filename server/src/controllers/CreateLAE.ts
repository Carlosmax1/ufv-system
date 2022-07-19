import express from 'express';
import { Room } from '../models/Rooms';
import { v4 as uuid } from 'uuid';

export async function createLAE(req: express.Request, res: express.Response) {
  const body = req.body;
  const room = await Room.create({...body, id: uuid(), createDate: Date.now()})
  if(!room){
    return res.json({result: "ERROR"});
  }else{
    res.status(200);
    return res.json(room);
  }
}

/*
  id: string
  nome: string
  horario_inicio: string
  data_disponivel: string
  responsavel: string
  pessoa_que_cadastrou: string
  vagas: number
  createDate: date
*/