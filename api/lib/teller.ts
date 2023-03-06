import ITellerData, { ITellerApi } from 'types/teller';
import https from 'https';
import fs from 'fs';

const TellerApi = {} as ITellerApi;

const options = {
  hostname: 'api.teller.io',
  port: 443,
  path: '/accounts',
  method: 'GET',
  key: fs.readFileSync('../certificates/private_key.pem'),
  cert: fs.readFileSync('../certificates/certificate.pem'),
  headers: {
    Authorization: '',
  },
};

TellerApi.getAccount = (token: string): Promise<ITellerData[]> => {
  options.headers.Authorization =
    'Basic ' + Buffer.from(token + ':').toString('base64url');

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      res.on('data', (data) => resolve(data.toString()));
    });
    req.end();
  });
};

export default TellerApi;
