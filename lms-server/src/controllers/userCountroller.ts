import { IReq, IRes, IReqQuery } from "IExpress";
  import {User} from "../models/User.model";
const { validationResult } = require("express-validator");
import HttpStatusCodes from "../constant/ResponseStatusCode";
import ErrorHandler from "../others/ErrorHandler";
import { CommonResponse } from "../others/Response";
import HashPassword from "../utils/HashPassword";
import AccessTokenManager from "../others/AccessTokenINbuilt";

export const createUser = async (
  req: IReq<{
    username: string;
    email: string;
    password: string;
  }>,
  res: IRes
) => {
  const { username, email, password } = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    if (!username) {
      throw new CommonResponse(
        HttpStatusCodes.BAD_REQUEST,
        "Full name is required",
        null,
        true
      );
    } else if (!password) {
      throw new CommonResponse(
        HttpStatusCodes.BAD_REQUEST,
        "Password must be required",
        null,
        true
      );
    } else if (password.length < 8) {
      throw new CommonResponse(
        HttpStatusCodes.BAD_REQUEST,
        `Password must be at least 8 characters`,
        null,
        true
      );
    }
    const IsExist = await User.findOne({
      where: {
        email,
      },
    });
    if (IsExist) {
      throw new CommonResponse(
        HttpStatusCodes.FORBIDDEN,
        "This user is already registered",
        null,
        true
      );
    }

    const hashedPass = await HashPassword.generateHashPassword(password);
    const refreshToken = AccessTokenManager.generateToken({
      email,
      loggedInAt: new Date(),
    });
    const newUser = await User.create({
      email,
      password: hashedPass.hashedPassword,
      username,
      refreshToken,
      
    });

    return res.status(HttpStatusCodes.OK).json(
      new CommonResponse(
        HttpStatusCodes.OK,
        "User Data",
        {
          userInformation: newUser,
          loggedInAt: new Date(),
        },
        false
      )
    );
  } catch (error) {
    return ErrorHandler(res, error);
  }
};

export const login = async (
  req: IReq<{
    email: string;
    password: string;
  }>,
  res: IRes
) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    console.log()
    if (!user) {
      throw new CommonResponse(
        HttpStatusCodes.NOT_FOUND,
        "Account not found. Please register to login.",
        null,
        true
      );
    }
    const passCheck =await  HashPassword.decodeHashPassword(password,user?.password)
    if (!passCheck) {
      throw new CommonResponse(
        HttpStatusCodes.BAD_REQUEST,
        "Invalid password",
        null,
        true
      );
    }
    const token = AccessTokenManager.generateToken({
      email,
      _id:user.id,
      loggedInAt: new Date(),
    });
    return res.status(HttpStatusCodes.OK).json(
      new CommonResponse(
        HttpStatusCodes.OK,
        "User Successfully LoggedIn",
        {
          accessToken: token,
          userInformation: user,
          loggedInAt: new Date(),
        },
        false
      )
    );
  } catch (error) {
    return ErrorHandler(res, error);
  }
};

