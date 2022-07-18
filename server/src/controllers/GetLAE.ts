import express from 'express';

export function GetLAE(req: express.Request, res: express.Response) {
    const { date } = req.params;
    console.log(date);
    res.status(200);
    return res.json({result: 'ok'})
}