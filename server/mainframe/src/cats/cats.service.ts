import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatInput } from './inputs/cat.input';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

    async create(createCatDto: CatInput): Promise<Cat> {
        const createCat = new this.catModel(createCatDto)
        return await createCat.save()
    }

    async findAll(): Promise<Cat[]> {
        return await this.catModel.find().exec()
    }
}
