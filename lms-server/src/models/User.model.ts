import { IUser } from "IUsers";
import sequeilze from "../config/Pgconfig";
import { DataTypes, Optional,Model } from "sequelize";
interface UserCreationAttributes extends Optional<IUser, 'id'> {}

// Define the model and its types
export interface UserModel
  extends Model<IUser, UserCreationAttributes>,
    IUser {}


export const User = sequeilze.define<UserModel>('Auth', {
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

