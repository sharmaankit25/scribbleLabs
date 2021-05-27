import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;
@Schema({
  timestamps: true
})
export class Item extends Document {

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  qty: number;

  @Prop()
  description: string;

}

export const ItemSchema = SchemaFactory.createForClass(Item);
