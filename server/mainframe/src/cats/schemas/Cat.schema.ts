import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CatDocument = Cat & Document
@Schema({
  timestamps: true,
})
export class Cat extends Document {
  @Prop(String)
  name: string

  @Prop(Number)
  age: number

  @Prop(String)
  breed: string
}

export const CatSchema = SchemaFactory.createForClass(Cat)
