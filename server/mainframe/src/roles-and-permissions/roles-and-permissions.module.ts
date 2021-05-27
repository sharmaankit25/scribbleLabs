import { Module } from '@nestjs/common';
import { Role ,RoleSchema } from './schemas/role.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { RolesController } from './controllers/roles.controller';
import { RolesService } from './services/roles.service';
import { UserRole, UserRoleSchema } from './schemas/userRole.schema';
import { UserRolesController } from './controllers/userRole.controller';
import { UserRolesService } from './services/userRoles.service';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Role.name, schema: RoleSchema },
    { name: UserRole.name, schema: UserRoleSchema }
  ])],
  controllers: [RolesController, UserRolesController],
  providers: [RolesService, UserRolesService],
})
export class RolesAndPermissionsModule {}
