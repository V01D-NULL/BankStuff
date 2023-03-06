// GraphQL complains when it's given types in the resolver for some reason
// @ts-nocheck

// import TellerApi from '../../lib/teller';

// const TellerApi = require('/home/tim/Desktop/BankStuff/api/lib/teller.ts');

module.exports = {
  // export default {
  Query: {
    Account(_parent, args, _contextValue, _info) {
      return { token: args.token, balance: 9999999 };
    },
  },
};
