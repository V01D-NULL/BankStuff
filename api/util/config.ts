import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

interface EnvConfig {
  API_BASE_URL: string;
}

const getEnvConfig = (): EnvConfig => {
  return process.env as unknown as EnvConfig;
};

export default getEnvConfig;
