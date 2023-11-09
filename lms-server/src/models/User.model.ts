import { IUser } from "../types/IUsers";
import { Schema, Document,model } from "mongoose";

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: [true, "Password is required"] },
});

export const User = model<IUser>("Course",UserSchema)

