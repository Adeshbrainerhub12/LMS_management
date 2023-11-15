import { IRes } from "../types/IExpress";

/**
 * ErrorHandler is used at catch statement to handle error
 * @returns
 */
export default function ErrorHandler(response: IRes, error: any) {
  if(error?.name === "ValidationError"){
    return response.status(400).json({
      status: 400,
      message: error?.message || "Validation failed",
      isError: true,
      data: null
    })
  }

  return response.status(error.status || 400).json(
    Object.keys(error).length !== 0
      ? error
      : {
          status: 500,
          message: error.message as string,
          errorType: "System_Error",
        }
  );
}
