import QueryAccountData from '@components/account/account-data';
import ConnectBankAccount from '@components/account/connect';
import { useEffect, useState } from 'react';

const Home = () => {
  const [token, setToken] = useState<string>('');

  return (
    <>
      {!token.length ? (
        <ConnectBankAccount success={setToken} />
      ) : (
        <QueryAccountData token={token} />
      )}
    </>
  );
};

export default Home;
