/**
 * Environments variables declared here.
 */

import dotenv from "dotenv"
dotenv.config()
export default {
  Port: process.env.PORT ?? "",
  MONGO_URL: process.env.MONGO_URL ?? "",
  JWT: {
    SecretKey: process.env.JWT_SECRETKEY ?? "",
  },
  BackendUrl: {
    BACKEND_URL:process.env.BACKEND_URL,
  },
} as const;
