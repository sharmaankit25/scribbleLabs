import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EmployeeCreateDto } from "../dto/EmployeeCreate.dto";
import { Employee, EmployeeDocument } from "../schemas/Employee.schema";
import * as mongoose from 'mongoose'


@Injectable()
export class EmployeeRepository {

    constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) { }

    async create(employeeCreatedto: EmployeeCreateDto): Promise<Employee> {

        const newEmployee = new this.employeeModel(employeeCreatedto);
        return await newEmployee.save();
    }

    async findAll(): Promise<Employee[]> {
        return await this.employeeModel.find();
    }
    async delete(id: string): Promise<boolean> {
        const objId = mongoose.Types.ObjectId(id)

        const ret = await this.employeeModel.deleteOne({ _id: objId })
        console.log(ret.n)
        return (ret.n === 1)
    }



}
