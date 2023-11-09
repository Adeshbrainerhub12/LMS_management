/**
 * Setup express server.
 */

import express, { Request, Response, NextFunction } from "express";
import logger from "jet-logger";
//**** Variables ****//

const app = express();

//**** Setup ****//

// Basic middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

export default app
