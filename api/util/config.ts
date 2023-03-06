import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

interface EnvConfig {
  API_BASE_URL: string;
  DB_HOST: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_PORT: string;
  DATABASE: string;
}

const getEnvConfig = (): EnvConfig => {
  return process.env as unknown as EnvConfig;
};

export default getEnvConfig;
