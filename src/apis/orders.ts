import axios, { AxiosResponse, AxiosError } from "axios";
import endpoint from "./endpoint.config";

interface IApiSuccessMessage {
  status: string;
}

interface IApiError {
  status: string;
  statusCode: number;
  errorMessage: string;
}

export class ApiError implements IApiError {
  status: string = "";
  statusCode: number = 0;
  errorMessage: string = "";

  constructor(err: AxiosError) {
    this.status = err.response.data.status;
    this.statusCode = err.response.status;
    this.errorMessage = err.response.data.errorMessage;
  }
}

interface INumberOfSuccessfulOrderResponse extends IApiSuccessMessage {
  result: {
    success: number;
  };
}

interface INumberOfFailedOrderResponse extends IApiSuccessMessage {
  result: {
    failure: number;
  };
}

export function fetchNumberOfSuccessfulOrder(): Promise<
  INumberOfSuccessfulOrderResponse
> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${endpoint.orders.request.success}?error=random`)
      .then((resp: AxiosResponse) => resolve(resp.data))
      .catch((err: AxiosError) => reject(new ApiError(err)));
  });
}

export function fetchNumberOfFailedOrder(): Promise<
  INumberOfFailedOrderResponse
> {
  return new Promise((resolve, reject) => {
    axios
      .get(endpoint.orders.request.failure)
      .then((resp: AxiosResponse) => resolve(resp.data))
      .catch((err: AxiosError) => reject(new ApiError(err)));
  });
}
