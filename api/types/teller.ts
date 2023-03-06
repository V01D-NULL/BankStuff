export default interface ITellerData {
  currency: number;
  enrollment_id: string;
  id: string;
  institution: {
    id: string;
    name: string;
  };
  last_four: number;
  links: {
    balances: string;
    self: string;
    transactions: string;
  };
  name: string;
  status: string;
  subtype: string;
  type: string;
}

export interface ITellerApi {
  getAccount: Function;
}
