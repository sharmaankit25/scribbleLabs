import { Injectable } from '@nestjs/common';
import { UserRoleDocument } from "../schemas/userRole.schema";
import { UserRole as UserRoleType} from '../schemas/userRole.schema'
import { CreateUserRoleDto } from '../dto/create-userRole.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserRolesService {
  constructor(@InjectModel('UserRole') private userRoleModel: Model<UserRoleDocument>) {}


  async findAll(): Promise<UserRoleType[]> {
    return await this.userRoleModel.find();
  }

  async findOne(id: string): Promise<UserRoleType> {
    return await this.userRoleModel.findOne({ _id: id });
  }

  async create(createRoleDto: CreateUserRoleDto): Promise<UserRoleType> {
    const newRole = new this.userRoleModel(createRoleDto);
    return await newRole.save();
  }

  async delete(id: string): Promise<UserRoleType> {
    return await this.userRoleModel.findByIdAndRemove(id);
  }

  async update(id: string, userRole: CreateUserRoleDto): Promise<UserRoleType> {
    return await this.userRoleModel.findByIdAndUpdate(id, userRole, { new: true });
  }
}
