import { DataTypes } from "sequelize";

export interface ILogin {
  email: string;
  password: string;

}
export interface IRegister extends ILogin {
  name: string;
}

export interface IUser {
  id?:string;  
  username: string;
  email: string;
  password: string;
  image?:string,
  refreshToken:string,
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