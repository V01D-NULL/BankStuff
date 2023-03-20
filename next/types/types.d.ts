interface ITellerSetup {
  version: string;
  setup: Function;
}

interface ITellerConnect {
  open: Function;
}

interface IEnrollment {
  accessToken: string;
  enrollment: {
    id: string;
    institution: {
      name: string;
    };
  };
  signatures: [];
  user: {
    id: string;
  };
}

interface IQueryData {
  About: IAbout;
  Account: IAccountData[];
}

interface IAbout {
  description: string;
  github: string;
}

interface IAccountData {
  id: string;
  currency: string;
  lastFour: number;
  name: string;
  subType: string;
  status: string;
  institution: {
    name: string;
  };
  Balance: {
    available: number;
    ledger: number;
  };
}
