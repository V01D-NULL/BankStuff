import { Sequelize } from 'sequelize';
import getEnvConfig from '../util/config';

// export const sequelize = new Sequelize('postgres::memory:');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DATABASE } = getEnvConfig();
export const sequelize = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: parseInt(DB_PORT),
  dialect: 'postgres',
  logging: false,
});
