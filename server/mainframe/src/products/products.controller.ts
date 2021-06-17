import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common'
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number
  ): any {
    const generatedID = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice
    )
    return { id: generatedID }
  }

  @Get()
  async getAllProducts() {
    const products = this.productsService.getAll()
    return products
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string): any {
    return this.productsService.getOne(prodId)
  }

  @Patch('id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number
  ) {
    this.productsService.updateProduct(prodId, title, description, price)
  }
}
