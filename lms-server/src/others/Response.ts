import HttpStatusCodes from "../constant/ResponseStatusCode";

export class CommonResponse<T> {
  status = 0;
  message: string = "";
  data: T | null = null;
  isError = false;
  errors: string[] = [];

  constructor(
    status: HttpStatusCodes,
    message: string,
    data: T,
    isError: boolean,
    errors?: string[]
  ) {
    this.message = message;
    this.isError = isError;
    this.data = data;
    this.status = status;
    if (errors) {
      this.errors = errors;
    }
  }
}
