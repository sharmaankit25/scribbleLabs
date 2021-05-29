import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
// import { PermissionsEnum } from '../../'
export type UserPermissionDocument = UserPermission & Document

@Schema({
  timestamps: true,
})
export class UserPermission extends Document {
  @Prop(Number)
  userId: number

  @Prop([String])
  permissions: string[]
}

export const UserPermissionSchema = SchemaFactory.createForClass(UserPermission)
