import { IExpress } from 'types/express';
import cors from 'cors';
import InitializeGQL from '../gql/graphql';
import getEnvConfig from '../util/config';
import express from 'express';

abstract class BaseRouter {
  protected app: IExpress;
  private corsOptions = {
    origin: [
      `http://${getEnvConfig().API_BASE_URL}:3000`,
      'https://studio.apollographql.com',
    ],
  };

  constructor(app: IExpress) {
    this.app = app;
    this.app.use(cors(this.corsOptions));
    this.app.use(express.json());
  }

  listen = (port: number): void => {
    this.app.listen(port, () => console.log('Listening on port', port));
    InitializeGQL(this.app);
  };

  abstract getRequests: Array<Function>;
  abstract postRequests: Array<Function>;
}

export default BaseRouter;
