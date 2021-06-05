import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type RoleDocument = Role & Document

@Schema({
  timestamps: true,
})
export class Role extends Document {
  @Prop(String)
  title: string

  @Prop(String)
  slug: string

  @Prop({ type: String })
  description: string

  @Prop([String])
  permissions: string[]
}

export const RoleSchema = SchemaFactory.createForClass(Role)
