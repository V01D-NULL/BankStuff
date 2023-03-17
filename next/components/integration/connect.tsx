import Script from 'next/script';
import { useState } from 'react';
import { getApiUrl, getAppId } from '../../util/config';

interface ConnectIntegrationProps {
  destroy: Function;
}

const ConnectIntegration = ({ destroy }: ConnectIntegrationProps) => {
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
          fetch(`http://${getApiUrl()}:8082/connect?token=${accessToken}`, {
            method: 'post',
            headers: {
              Accept: 'application/json',
            },
          });
          destroy();
        },

        onExit: function () {
          console.log('User closed Teller Connect');
          destroy();
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

export default ConnectIntegration;
