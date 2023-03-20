import Script from 'next/script';
import { useState } from 'react';
import { getApiUrl, getAppId } from '../../util/config';

interface ConnectBankAccountProps {
  success: Function;
}

const ConnectBankAccount = ({ success }: ConnectBankAccountProps) => {
  const [tellerInitialized, setTellerInitialized] = useState(false);
  const [tellerConnect, setTellerConnect] = useState<ITellerConnect | null>(
    null
  );

  console.log(getApiUrl(), '---', getAppId());

  const loaded = () => {
    setTellerInitialized(true);
    setTellerConnect(
      // @ts-ignore (Window object doesn't have TellerConnect initially)
      window.TellerConnect.setup({
        applicationId: getAppId(),
        onInit: function () {
          console.log('Teller Connect has initialized');
        },

        onSuccess: function ({ accessToken }: IEnrollment) {
          console.log('User enrolled successfully', accessToken);
          success(accessToken);
        },

        onExit: function () {
          console.log('User closed Teller Connect');
        },
      })
    );
  };

  return (
    <>
      <Script src="https://cdn.teller.io/connect/connect.js" onReady={loaded} />
      {tellerInitialized && tellerConnect?.open()}
    </>
  );
};

export default ConnectBankAccount;
