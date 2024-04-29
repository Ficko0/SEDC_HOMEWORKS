import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { ICurrentUser } from '../types/currentUser.interface';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): ICurrentUser | undefined => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
