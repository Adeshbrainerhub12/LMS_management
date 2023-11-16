import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

import logger from "jet-logger";
const dbName = `${process.env.DB_NAME}`;
const dbUser = `${process.env.DB_USER}`;
const dbPassword = `${process.env.DB_PASSWORD}`;

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: "localhost",
  dialect: "postgres",
});



export default sequelizeConnection;
