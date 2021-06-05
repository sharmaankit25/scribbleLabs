import { Injectable } from '@nestjs/common'
import { RoleDocument } from '../schemas/role.schema'
import { Role as RoleType } from '../schemas/role.schema'
import { CreateRoleDto } from '../dto/create-role.dto'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { CreateRolePermissionDto } from '../dto/create-role-permission.dto'

@Injectable()
export class RolesService {
  constructor(@InjectModel('Role') private roleModel: Model<RoleDocument>) {}

  async findAll(): Promise<RoleType[]> {
    return await this.roleModel.find()
  }

  async findOne(id: string): Promise<RoleType> {
    return await this.roleModel.findOne({ _id: id })
  }

  async create(createRoleDto: CreateRoleDto): Promise<RoleType> {
    const newRole = new this.roleModel(createRoleDto)
    return await newRole.save()
  }

  async delete(id: string): Promise<RoleType> {
    return await this.roleModel.findByIdAndRemove(id)
  }

  async update(id: string, role: CreateRoleDto): Promise<RoleType> {
    return await this.roleModel.findByIdAndUpdate(id, role, { new: true })
  }

  async updatePermission(
    id: string,
    permissions: CreateRolePermissionDto
  ): Promise<RoleType> {
    console.log(permissions)
    return await this.roleModel.findByIdAndUpdate(id, permissions)
  }
}
