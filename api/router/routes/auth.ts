import { Request, Response } from 'express-serve-static-core';
import { IExpress } from '../../types/express';
// import TellerApi from '../../lib/teller';
import ITellerData from '../../types/teller';

type RQ = Request;
type RS = Response;

export default (app: IExpress) => [
  app.post('/connect', async (req: RQ, res: RS) => {
    // const { token } = req.query;
    // const data: Array<ITellerData> = await TellerApi.getAccount(token);
    // res.json({ message: data });
  }),

  app.post('/verify', async (req: RQ, res: RS) => {
    // const { token } = req.query;
    // const data: Array<ITellerData> = await TellerApi.getAccount(token);
    // res.json({ message: data });
  }),
];
