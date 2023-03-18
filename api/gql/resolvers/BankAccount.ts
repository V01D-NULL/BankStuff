//@ts-nocheck
const { ForbiddenError } = require('apollo-server-express');
const TellerApi = require('../../lib/teller.ts');

module.exports = {
  async Account(parent, { token }, contextValue, info) {
    const response = await TellerApi.request(token);
    const error = response?.error;

    if (error) {
      throw new ForbiddenError(error.message);
    }

    return response.map((account) => {
      return {
        token,
        id: account.id,
        type: account.type,
        subType: account.subtype,
        status: account.status,
        name: account.name,
        lastFour: account.last_four,
        institution: {
          name: account.institution.name,
        },
        currency: account.currency,
      };
    });
  },
};
