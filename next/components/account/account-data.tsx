import { gql } from '@apollo/client';
import apolloClient from 'lib/apollo-client';
import { useEffect, useState } from 'react';
import About from '../about';
import AccountDisplay from '../display';

interface IQueryAccountDataProps {
  token: string;
}

const QueryAccountData = ({ token }: IQueryAccountDataProps) => {
  const [queryData, setQueryData] = useState<IQueryData | null>(null);

  useEffect(() => {
    const fetchQuery = async () => {
      const { data } = await apolloClient.query({
        query: gql`
          query Account($token: String!) {
            About {
              description
              github
            }
            Account(token: $token) {
              id
              currency
              lastFour
              name
              subType
              status
              institution {
                name
              }
              Balance {
                available
                ledger
              }
            }
          }
        `,
        variables: {
          token,
        },
      });
      setQueryData(data);
    };

    fetchQuery();
  }, []);

  return (
    <>
      {!queryData && <p>Loading...</p>}

      {queryData && (
        <div>
          <About
            description={queryData.About.description}
            github={queryData.About.github}
          />
          <br />
          <br />
          <AccountDisplay props={queryData.Account} />
        </div>
      )}
    </>
  );
};

export default QueryAccountData;
