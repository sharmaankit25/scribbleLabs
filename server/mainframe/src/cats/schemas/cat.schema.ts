import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CatDocument = Cat & Document
@Schema({
  timestamps: true,
})
export class Cat extends Document {
  @Prop({ type: String })
  name: string

  @Prop({ type: Number })
  age: number

  @Prop({ type: String })
  breed: string
}

export const CatSchema = SchemaFactory.createForClass(Cat)
