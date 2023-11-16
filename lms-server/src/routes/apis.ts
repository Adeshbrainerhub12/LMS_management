import Paths from "../constant/PathsEndpoints.ts";
import { Router } from "express";
import UserRouter from "./UserRouter.ts";
const ApiRouter = Router()



ApiRouter.use(Paths.Users.Base,UserRouter)

export default ApiRouter