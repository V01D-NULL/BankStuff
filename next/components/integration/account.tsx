interface AccountDisplayProps {
  props: {
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
  }[];
}

const AccountDisplay = ({ props }: AccountDisplayProps) => {
  return (
    <>
      {props?.map(({ id, name, last_four, currency, institution, status }) => {
        return (
          <div key={id}>
            Name: {name}
            <br />
            Last four: {last_four}
            <br />
            Currency: {currency}
            <br />
            Institution: {institution.name}
            <br />
            Status: {status}
          </div>
        );
      })}
    </>
  );
};

export default AccountDisplay;
