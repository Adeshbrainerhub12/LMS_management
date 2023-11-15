import EnvVars from "../constant/EnvVars";
import { IForgetPasswordToken, IUserToken } from "../types/IUsers.ts";
import JWTManager from "jsonwebtoken";

/**
 * @returns User token
 */
const generateToken = (payload: IUserToken) => {
  const token = JWTManager.sign(payload, EnvVars.Jwt.Secret, {
    expiresIn: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 365,
  });

  return token;
};

/**
 *
 * @returns User payload based on ES256 algorithm
 */
const verifyToken = (token: string) => {
  const userPayload = JWTManager.verify(token, EnvVars.Jwt.Secret);
  return userPayload;
};

const generateTokenForForgetPassword = (payload: IForgetPasswordToken) => {
  const token = JWTManager.sign(payload, EnvVars.Jwt?.ForgetTokenSecret, {
    expiresIn: Math.floor(Date.now() / 1000) + 6 * 60 * 24 * 365,
  });
  return token;
};
export default {
  generateToken,
  verifyToken,
  generateTokenForForgetPassword,
};
