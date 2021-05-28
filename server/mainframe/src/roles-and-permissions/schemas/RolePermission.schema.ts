import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from 'mongoose'
import { Role } from './role.schema'

export type RolePermissionDocument = RolePermission & Document

@Schema({
  timestamps: true,
})
export class RolePermission extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Role.name })
  roleId: string

  @Prop(String)
  permissions: string[]
}

export const RolePermissionSchema = SchemaFactory.createForClass(RolePermission)
