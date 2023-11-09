import sequelizeConnection from "../config/Pgconfig";
import { IUser } from "../types/IUsers";
// import { Schema, Document,model } from "mongoose";
import {  DataType, DataTypes, Model } from "sequelize";

class User extends Model<IUser> implements IUser {
  public username!: string;  // Stores username for User
  public password!: string; // Stores password for User
   public email!: string;  // Stores email for User
}


User.init({
  username:{
     type:DataTypes.STRING,
     allowNull:false
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false,
  }

},{
  sequelize:sequelizeConnection,
  modelName:"User"
})


export default User