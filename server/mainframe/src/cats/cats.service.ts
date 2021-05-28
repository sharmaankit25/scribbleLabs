import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
// import { Cat } from './interfaces/cat.interface'
import { CatInput } from './inputs/cat.input'
import { CatDTO } from './dto/create-cat.dto'
import { Cat, CatDocument } from './schemas/Cat.schema'

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private catModel: Model<CatDocument>) {}

  async create(createCatDto: CatInput): Promise<Cat> {
    return await this.catModel.create(createCatDto)
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec()
  }

  async findOne(id: string): Promise<Cat> {
    return await this.catModel.findOne({ _id: id })
  }

  async delete(id: string): Promise<Cat> {
    return await this.catModel.findByIdAndRemove(id)
  }

  async update(id: string, cat: CatDTO): Promise<Cat> {
    return await this.catModel.findByIdAndUpdate(id, cat, { new: true })
  }
}
