import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { PermissionsEnum } from '../../../../../common/Permissions'
export type UserPermissionDocument = UserPermission & Document

@Schema({
  timestamps: true,
})
export class UserPermission extends Document {
  @Prop(Number)
  userId: number

  @Prop(PermissionsEnum)
  permissions: string[]
}

export const UserPermissionSchema = SchemaFactory.createForClass(UserPermission)
