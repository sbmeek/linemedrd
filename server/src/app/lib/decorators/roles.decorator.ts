import { SetMetadata } from '@nestjs/common';
import { Roles } from '../types';

export const RequiredRole = (...roles: Roles[]) => SetMetadata('roles', roles);
