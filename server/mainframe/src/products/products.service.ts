import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from "@nestjs/mongoose"
import { Model } from 'mongoose'
import { Product, ProductDocument } from "./product.model"

@Injectable()
export class ProductsService {
    private products: Product[] = []

    constructor(@InjectModel('Product') private readonly productModel: Model<ProductDocument>) {}

    async insertProduct(title: string, desc: string, price: number) {
        const newProduct = new this.productModel({ title, description: desc, price })
        const result  = await newProduct.save()
        return result.id as string
    }

    async getAll() {
        const products = await this.productModel.find().exec()
        return products.map(prod => ({ id: prod.id, title: prod.title, description: prod.description }))
    }

    async getOne(prodId: string) {
        const product  = await this.findProduct(prodId)
        return {  id: product.id, title: product.title, description: product.description, price: product.price }
    }

    async updateProduct(prodId: string, title: string, description: string, price: number) {
        const updatedProduct  = await this.findProduct(prodId)

        if (title) {
            updatedProduct.title = title
        }

        if (description) {
            updatedProduct.description = description
        }

        if (price) {
            updatedProduct.price = price
        }
        updatedProduct.save()
    }

    private async findProduct(id: string): Promise<Product> {
        let product;
        try {
            product = await this.productModel.findById(id)
        } catch(err) {
            throw new NotFoundException('Could not Find Product');
        }
        if (!product) {
            throw new NotFoundException('Could not Find Product');
        }
        return product
    }
}
