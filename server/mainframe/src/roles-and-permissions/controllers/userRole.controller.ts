import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { CreateUserRoleDto } from '../dto/create-userRole.dto'
import { UserRolesService } from '../services/userRoles.service'
import { UserRole } from '../schemas/userRole.schema'
import { Role } from '../schemas/role.schema'

@Controller('userRoles')
export class UserRolesController {
  constructor(private readonly userRolesService: UserRolesService) {}

  @Get()
  findAll(): Promise<UserRole[]> {
    return this.userRolesService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<UserRole> {
    return this.userRolesService.findOne(id)
  }

  @Get('/user/:id')
  findUserRoles(@Param('id') id): Promise<Role[]> {
    return this.userRolesService.findUserRole(id)
  }

  @Get('/user/:id/permissions')
  findUserPermission(@Param('id') id) {
    return this.userRolesService.findUserPermission(id)
  }

  @Post()
  create(@Body() createRoleDto: CreateUserRoleDto): Promise<UserRole> {
    return this.userRolesService.create(createRoleDto)
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<UserRole> {
    return this.userRolesService.delete(id)
  }

  @Put(':id')
  update(
    @Body() updateRoleDto: CreateUserRoleDto,
    @Param('id') id
  ): Promise<UserRole> {
    return this.userRolesService.update(id, updateRoleDto)
  }
}
