import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

// interface NameTypeInterface { required: Boolean, message: String }
@Schema({
  timestamps: true
})
export class Item extends Document{

  @Prop({ type: String })
  name: string;

  @Prop(Number)
  qty: number;

  @Prop(String)
  description: string;

  // @Prop({ default: Date.now })
  // createdAt:Date

  // @Prop({ default: Date.now })
  // updatedAt:Date
}

export const ItemSchema = SchemaFactory.createForClass(Item);
