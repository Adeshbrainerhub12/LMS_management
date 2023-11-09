import { connectDB } from "./config/db.ts";
import EnvVars from "./constant/EnvVars.ts";
import app from "./server.ts";
import logger from "jet-logger";
// Database Intialization
connectDB();

const Server_Message = `Express server started on port:${EnvVars.Port.toString()}`;

app.listen(EnvVars.Port, () => {
  logger.info(Server_Message);
});
