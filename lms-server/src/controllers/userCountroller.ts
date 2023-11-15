import { IReq, IRes, IReqQuery } from "IExpress";
import User from "../models/User.model";
const { validationResult } = require("express-validator");

const createUser = async (
  req: IReq<{ username: string; email: string; password: string }>,
  res: IRes
) => {
    const {username , email , password} = req.body
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const Createuser = await User.create
  } catch (error) {}
};
