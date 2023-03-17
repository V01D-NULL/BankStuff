import { gql } from '@apollo/client';
import apolloClient from '../lib/apollo-client';
import { useEffect, useState } from 'react';

const App = (props: any) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      const {
        data: {
          BankAccount: {
            Auth: { token },
          },
        },
      } = await apolloClient.query({
        query: gql`
          query BankAccount {
            BankAccount {
              Auth {
                token
              }
            }
          }
        `,
        variables: {
          __token: 'abcdefg',
        },
      });

      setToken(token);
    };

    getToken();
  }, []);

  return <>Token: {token}</>;
};

export default App;
