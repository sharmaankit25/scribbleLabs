import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { ItemsModule } from './items/items.module';
import { ProductsModule } from './products/products.module';
import { CatsModule } from './cats/cats.module';
import config from './config/keys'

@Module({
  imports: [ItemsModule, GraphQLModule.forRoot({ autoSchemaFile: 'schema.gpl', sortSchema: true }), MongooseModule.forRoot(config.mongoURI), ProductsModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
