import HttpStatusCodes from "../constant/ResponseStatusCode.ts";
import { IReq, IRes } from "../types/IExpress.ts";
import { ILogin } from "../types/IUsers.ts";
import { CommonResponse } from "../others/Response.ts";
import { NextFunction } from "express";

export function validatePassword(
  request: IReq<ILogin>,
  response: IRes,
  next: NextFunction
) {
  const { password } = request.body;
  const strongPasswordPattern =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
  const sameCharacters = /^(\d)\1*$|^([a-zA-Z])\2*$/;

  if (!password) {
    return response
      .status(HttpStatusCodes.BAD_REQUEST)
      .json(
        new CommonResponse(
          HttpStatusCodes.BAD_REQUEST,
          "Property [password] is missing from the payload",
          null,
          true
        )
      );
  } else if (password.length < 8) {
    return response
      .status(HttpStatusCodes.BAD_REQUEST)
      .json(
        new CommonResponse(
          HttpStatusCodes.BAD_REQUEST,
          "Password length must be at least 8, got " + password.length,
          null,
          true
        )
      );
  } else if (
    !strongPasswordPattern.test(password) ||
    sameCharacters.test(password)
  ) {
    return response
      .status(HttpStatusCodes.BAD_REQUEST)
      .json(
        new CommonResponse(
          HttpStatusCodes.BAD_REQUEST,
          `Password includes atleast one alphabetic character, one digit, one special character & minimum total length of 8 characters.`,
          null,
          true
        )
      );
  } else {
    next();
  }
}
