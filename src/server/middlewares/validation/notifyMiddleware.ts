import { NextFunction, Response } from 'express';
import { Payload } from '../../../types';
import { TypedRequestBody, payloadError } from './utils';

// @DEV: The notification center must be layer agnostic, that's why I don't validate the `to` argument here
const notifyMiddleware = (
  req: TypedRequestBody<Payload.NotifyUser>,
  _: Response,
  next: NextFunction
) => {
  const isPayloadValid =
    req.body.to?.length > 0 && req.body.message?.length > 0;
  isPayloadValid ? next() : next(payloadError);
};

export default notifyMiddleware;
