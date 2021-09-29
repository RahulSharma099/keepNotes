import { NextFunction, Request, Response } from 'express';
interface ApiError {
  httpStatus: number;
  message: string;
}
export const onNotFound = (req: Request, res: Response, next: NextFunction): void => {
  next({ success: false, message: `Cannot ${req.method} ${req.url}` });
};

// eslint-disable-next-line
export const onError = (err: ApiError, req: Request, res: Response, next: NextFunction): void => {
  console.log(err);
  res.status(err.httpStatus || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};
