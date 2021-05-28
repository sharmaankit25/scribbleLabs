import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Role } from './role.schema';

export type UserRoleDocument = UserRole & Document;

@Schema({
  timestamps: true
})
export class UserRole extends Document {
  @Prop(Number)
  userId: number;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: Role.name }] })
  roles: string[];
}

export const UserRoleSchema = SchemaFactory.createForClass(UserRole);
