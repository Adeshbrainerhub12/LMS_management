import mongoose from "mongoose";
import dotenv from "dotenv";
import EnvVars from "../constant/EnvVars";
import logger from "jet-logger";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(EnvVars.MONGO_URL);
    logger.info("Database is Connected : LMSManagementcluster");
  } catch {
    logger.info("Database is not Connected : LMSManagementcluster");
  }
};
