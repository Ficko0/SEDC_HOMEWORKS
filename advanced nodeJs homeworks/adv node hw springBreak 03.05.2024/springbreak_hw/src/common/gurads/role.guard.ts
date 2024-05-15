import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const permittedRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (!permittedRoles?.length) {
      return true;
    }

    const user = context.switchToHttp().getRequest();

    return permittedRoles.includes(user.role);
  }
}
