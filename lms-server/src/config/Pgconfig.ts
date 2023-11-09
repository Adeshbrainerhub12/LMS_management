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

export const connection = async () => {
  try {
    await sequelizeConnection.authenticate();
    logger.info("Database is connected with : lmsManagement");
  } catch (error) {
    logger.info("Database is not connected with : lmsManagement");
  }
};

export default sequelizeConnection;
