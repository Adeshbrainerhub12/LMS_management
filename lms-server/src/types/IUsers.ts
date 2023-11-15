import { DataTypes } from "sequelize";

DataTypes
export interface IUser {
  username: string;
  email: string;
  password: string;
}
export interface IForgetPassword {
  email: string;
  newPassword: string;
  conformPassword: String;
}

export interface IForgetPasswordToken {
  email: string;
}
export interface IUserToken {
  email: string;
  loggedInAt: Date;
  _id?:string;
}