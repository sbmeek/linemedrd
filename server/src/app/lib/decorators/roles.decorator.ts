import { SetMetadata } from '@nestjs/common';
import { Roles } from '../enums';

export const RequiredRole = (...roles: Roles[]) => SetMetadata('roles', roles);
