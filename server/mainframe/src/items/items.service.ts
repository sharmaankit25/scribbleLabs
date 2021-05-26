import { Injectable } from '@nestjs/common';
import { ItemDocument } from "./schemas/item.schemas";
import { Item as ItemType} from './schemas/item.schemas'
import { CreateItemDto } from './dto/create-item.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private itemModel: Model<ItemDocument>) {}


  async findAll(): Promise<ItemType[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<ItemType> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(createItemDto: CreateItemDto): Promise<ItemType> {
    const newItem = new this.itemModel(createItemDto);
    return await newItem.save();
  }

  async delete(id: string): Promise<ItemType> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: CreateItemDto): Promise<ItemType> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
