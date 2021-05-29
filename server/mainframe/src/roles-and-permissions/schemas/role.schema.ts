import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type RoleDocument = Role & Document

@Schema({
  timestamps: true,
})
export class Role extends Document {
  @Prop({ type: String })
  title: string

  @Prop({ type: String })
  slug: string

  @Prop({ type: String })
  description: string
}

export const RoleSchema = SchemaFactory.createForClass(Role)
