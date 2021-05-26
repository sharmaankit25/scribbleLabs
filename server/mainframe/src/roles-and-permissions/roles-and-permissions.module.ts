import { Module } from '@nestjs/common';
import { Role ,RoleSchema } from './schemas/role.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { RolesController } from './controllers/roles.controller';
import { RolesService } from './services/roles.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesAndPermissionsModule {}
