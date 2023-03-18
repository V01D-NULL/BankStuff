// @ts-nocheck
const https = require('https');
const fs = require('fs');

const TellerApi = {};

TellerApi.request = (token, optionsOverride) => {
  const options = {
    hostname: 'api.teller.io',
    port: 443,
    path: '/accounts',
    method: 'GET',
    key: fs.readFileSync('../certificates/private_key.pem'),
    cert: fs.readFileSync('../certificates/certificate.pem'),
    headers: {
      Authorization: 'Basic ' + Buffer.from(token + ':').toString('base64url'),
    },
    ...optionsOverride,
  };

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      res.on('data', (data) => resolve(JSON.parse(data.toString())));
    });
    req.end();
  });
};

module.exports = TellerApi;
