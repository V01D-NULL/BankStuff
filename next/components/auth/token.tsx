import { LegacyRef, useRef, useState } from 'react';
import { getApiUrl } from '../../util/config';
import AccountDisplay from '../integration/account';

interface IRef {
  value: string;
}

const TokenAuth = () => {
  const inputRef = useRef<IRef>(null);
  const [tokenStatus, setTokenStatus] = useState('');

  const submit = async () => {
    const token = inputRef.current?.value;
    const data = await fetch(
      `http://${getApiUrl()}:8082/verify?token=${token}`,
      {
        method: 'post',
      }
    );
    const { message } = await data.json();
    setTokenStatus(message ?? []);
  };

  return (
    <>
      <input
        ref={inputRef as LegacyRef<HTMLInputElement>}
        type="text"
        placeholder="Token"
      />{' '}
      <button type="submit" onClick={() => submit()}>
        Submit Token
      </button>
      <br />
      {tokenStatus.length && <AccountDisplay props={JSON.parse(tokenStatus)} />}
    </>
  );
};

export default TokenAuth;
