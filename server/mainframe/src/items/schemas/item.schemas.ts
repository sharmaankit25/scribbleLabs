import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop([String])
  name: string;

  @Prop([Number])
  qty: number;

  @Prop([String])
  description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
