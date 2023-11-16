import HttpStatusCodes from "../constant/ResponseStatusCode.ts";
import { IReq, IRes } from "../types/IExpress.ts";
import { ILogin } from "../types/IUsers.ts";
import { CommonResponse } from "../others/Response.ts";
import { NextFunction } from "express";

export function validateEmail(
  request: IReq<ILogin>,
  response: IRes,
  next: NextFunction
) {
  const { email } = request.body;
  var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

  if (!email) {
    return response
      .status(HttpStatusCodes.BAD_REQUEST)
      .json(
        new CommonResponse(
          HttpStatusCodes.BAD_REQUEST,
          "Property [email] is missing from the payload",
          null,
          true
        )
      );
  } else if (!emailRegex.test(email)) {
    return response
      .status(HttpStatusCodes.BAD_REQUEST)
      .json(
        new CommonResponse(
          HttpStatusCodes.BAD_REQUEST,
          "Property [email] pattern is invalid",
          null,
          true
        )
      );
  } else {
    next();
  }
}
