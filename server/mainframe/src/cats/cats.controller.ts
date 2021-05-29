import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CatsService } from './cats.service'
import { CatDTO } from './dto/create-cat.dto'
import { Cat } from './schemas/cat.schema'

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Cat> {
    console.log('Get One')
    return this.catsService.findOne(id)
  }

  @Post()
  create(@Body() createCatDto: CatDTO): Promise<Cat> {
    return this.catsService.create(createCatDto)
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Cat> {
    return this.catsService.delete(id)
  }

  @Put(':id')
  update(@Body() updateCatDto: CatDTO, @Param('id') id): Promise<Cat> {
    return this.catsService.update(id, updateCatDto)
  }
}
