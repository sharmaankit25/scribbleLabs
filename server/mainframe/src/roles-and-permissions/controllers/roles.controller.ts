import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
  import { CreateRoleDto } from '../dto/create-role.dto';
  import { RolesService } from '../services/roles.service';
  import { Role } from '../schemas/role.schema';

  @Controller('roles')
  export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Get()
    findAll(): Promise<Role[]> {
      return this.rolesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Role> {
      return this.rolesService.findOne(id);
    }

    @Post()
    create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
      return this.rolesService.create(createRoleDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Role> {
      return this.rolesService.delete(id);
    }

    @Put(':id')
    update(@Body() updateRoleDto: CreateRoleDto, @Param('id') id): Promise<Role> {
      return this.rolesService.update(id, updateRoleDto);
    }
  }
