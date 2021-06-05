import { Injectable } from '@nestjs/common'
import {
  UserRole as UserRoleType,
  UserRoleDocument,
} from '../schemas/userRole.schema'
import { CreateUserRoleDto } from '../dto/create-userRole.dto'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Role } from '../schemas/role.schema'

@Injectable()
export class UserRolesService {
  constructor(
    @InjectModel('UserRole') private userRoleModel: Model<UserRoleDocument>
  ) {}

  async findAll(): Promise<UserRoleType[]> {
    return await this.userRoleModel.find().populate('roles')
  }

  async findOne(id: string): Promise<UserRoleType> {
    return await this.userRoleModel.findOne({ _id: id }).populate('roles')
  }

  async findUserRole(id: string | number): Promise<Role[]> {
    const userId = Number(id)
    const roles: any[] = await (
      await this.userRoleModel.findOne({ userId }).populate('roles')
    ).roles
    console.log(roles)
    if (roles) {
      return roles
    }
  }

  async findUserPermission(id: string | number) {
    const userId = Number(id)
    try {
      const roles: any[] = await (
        await this.userRoleModel.findOne({ userId }).populate('roles')
      ).roles

      const uniquePermissions = new Set(
        roles.map((role: Role) => role.permissions).flat()
      )
      return [...uniquePermissions]
    } catch (err) {
      return []
    }
  }

  async create(createRoleDto: CreateUserRoleDto): Promise<UserRoleType> {
    const newRole = new this.userRoleModel(createRoleDto)
    return await newRole.save()
  }

  async delete(id: string): Promise<UserRoleType> {
    return await this.userRoleModel.findByIdAndRemove(id)
  }

  async update(id: string, userRole: CreateUserRoleDto): Promise<UserRoleType> {
    return await this.userRoleModel.findByIdAndUpdate(id, userRole, {
      new: true,
    })
  }
}
