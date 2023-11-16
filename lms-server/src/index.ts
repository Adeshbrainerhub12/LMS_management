// import { connectDB } from "./config/db.ts";
import  sequelizeConnection  from "./config/Pgconfig.ts";
import EnvVars from "./constant/EnvVars.ts";
import app from "./server.ts";
import logger from "jet-logger";
// Database Intialization


const Server_Message = `Express server started on port:${EnvVars.Port.toString()}`;

app.listen(EnvVars.Port, async() => {
  try {
    await sequelizeConnection.sync()
    await sequelizeConnection.authenticate()
    logger.info("Connected to DB LMS_Management")
  } catch (error) {
    logger.err("NOt connected to DB LMS_Management")
    
  }
  logger.info(Server_Message);
});
