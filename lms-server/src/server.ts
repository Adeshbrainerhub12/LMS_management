/**
 * Setup express server.
 */

import Paths from "./constant/PathsEndpoints";
import express, { Request, Response, NextFunction } from "express";
import logger from "jet-logger";
import BaseRouter from "./routes/apis";

//**** Variables ****//

const app = express();

//**** Setup ****//

// Basic middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(Paths.Base, BaseRouter);
export default app
