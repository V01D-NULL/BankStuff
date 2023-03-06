import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize';

const Bank = sequelize.define(
  'account',
  {
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },

    balance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    // enrollment_id: string;
    // id: string;
    // institution: {
    //     id: string;
    //     name: string;
    // };
    // last_four: number;
    // links: {
    //     balances: string;
    //     self: string;
    //     transactions: string;
    // };
    // name: string;
    // status: string;
    // subtype: string;
    // type: string;
  },
  {
    modelName: 'bank',
    timestamps: false,
    freezeTableName: true,
  }
);

export default Bank;
