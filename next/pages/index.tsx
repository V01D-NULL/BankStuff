import ConnectIntegration from '@components/integration/connect';
import TokenAuth from '@components/auth/token';
import { useState } from 'react';

const Home = () => {
  const [connectIntegration, setConnectIntegration] = useState(false);

  return (
    <div>
      <button
        disabled={connectIntegration}
        onClick={() => setConnectIntegration(!connectIntegration)}
      >
        Add new account
      </button>
      {connectIntegration && (
        <ConnectIntegration destroy={() => setConnectIntegration(false)} />
      )}

      <br />
      <br />

      <TokenAuth />
    </div>
  );
};

export default Home;
