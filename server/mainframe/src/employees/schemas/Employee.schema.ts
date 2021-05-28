import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { EmployeeStatus, EmployeeTier } from '../Employee.enum'

export type EmployeeDocument = Employee & Document
@Schema()
export class Employee extends Document {
  @Prop(String)
  name: string
  @Prop(String)
  designation: string
  @Prop(String)
  nearestCity: string
  @Prop({ type: EmployeeTier })
  tier: EmployeeTier
  @Prop({ type: EmployeeStatus })
  status: EmployeeStatus
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee)
