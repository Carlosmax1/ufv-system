import express from 'express';

export function createLAE(req: express.Request, res: express.Response) {
    res.status(200);
    return res.json({result: req.body})
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