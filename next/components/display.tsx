import ProjectWealth from './projection';

interface AccountDisplayProps {
  props: IAccountData[];
}

const AccountDisplay = ({ props }: AccountDisplayProps) => {
  console.log(props);

  return (
    <>
      {props?.map(
        ({
          id,
          name,
          lastFour,
          currency,
          institution,
          status,
          Balance: { available, ledger },
        }: IAccountData) => {
          return (
            <div key={id}>
              Name: {name}
              <br />
              Last four: {lastFour}
              <br />
              Currency: {currency}
              <br />
              Institution: {institution.name}
              <br />
              Status: {status}
              <br />
              <br />
              <ProjectWealth
                balance={available}
                pending={ledger - available}
                currency={currency}
              />
            </div>
          );
        }
      )}
    </>
  );
};

export default AccountDisplay;
