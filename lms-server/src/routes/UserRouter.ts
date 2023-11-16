import { createUser, login } from "../controllers/userCountroller";
import Paths from "../constant/PathsEndpoints";
import { signupValidation, loginValidation } from "../validation/Validate.user";
import { Router } from "express";
const UserRouter = Router();
UserRouter.post(Paths.Users.Create, signupValidation,createUser);
UserRouter.post(Paths.Users.Login, signupValidation,login);

export default UserRouter;
