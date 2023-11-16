import sequeilze from "../config/Pgconfig";
import { DataTypes } from "sequelize";


export const User = sequeilze.define('Auth', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  refreshToken:{
   type:DataTypes.STRING    
  },
  image:{
    type:DataTypes.STRING,
    defaultValue:""
  }
});

