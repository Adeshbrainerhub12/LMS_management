import * as e from "express";
import { Types } from "mongoose";
import { Query } from "express-serve-static-core";

export interface IReq<T = void> extends e.Request {
  userId?: Types.ObjectId | undefined;
  body: T;
}
export interface IRes extends e.Response {
  locals: {
    currentUser?: {};
  };
}

export interface IReqQuery<T extends Query, U = void> extends e.Request {
  query: T;
  body: U;
}
