import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { Document } from "@types/mongoose";
export type ProductDocument = Product & Document;

@Schema()
export class Product extends Document {
  @Prop([String])
  id: string;

  @Prop([String])
  title: string;

  @Prop([Number])
  price: number;

  @Prop([String])
  description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

