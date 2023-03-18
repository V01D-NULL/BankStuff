//@ts-nocheck
const { ForbiddenError } = require('apollo-server-express');
const TellerApi = require('../../lib/teller.ts');

module.exports = {
  BankAccount: {
    async Balance({ token, id }, args, contextValue, info) {
      const response = await TellerApi.request(token, {
        path: `/accounts/${id}/balances`,
      });
      const error = response?.error;

      if (error) {
        throw new ForbiddenError(error.message);
      }

      const { ledger, available } = response;
      return { ledger, available };
    },
  },
};
