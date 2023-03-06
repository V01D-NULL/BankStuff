import { Request, Response } from 'express-serve-static-core';
import { IExpress } from '../../types/express';
import Bank from '../../db/models/bank';
import { Identifier } from 'sequelize/types/model';
import TellerApi from '../../lib/teller';
import ITellerData from '../../types/teller';

type RQ = Request;
type RS = Response;

export default (app: IExpress) => [
  app.post('/connect', async (req: RQ, res: RS) => {
    const { token } = req.query;
    await Bank.create({ token });

    // Todo: API request for bank data would happen here.
    const data: Array<ITellerData> = await TellerApi.getAccount(token);
    res.json({ message: data });
  }),

  app.post('/verify', async (req: RQ, res: RS) => {
    const { token } = req.query;
    const dbToken = await Bank.findByPk(token as Identifier);
    console.log('Finding token', token, ': ', dbToken);

    if (!dbToken) {
      res.json({ error: 'Token not found' });
      return;
    }

    const data: Array<ITellerData> = await TellerApi.getAccount(token);
    res.json({ message: data });
  }),
];
