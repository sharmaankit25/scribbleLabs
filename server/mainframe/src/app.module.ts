import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { ItemsModule } from './items/items.module';
import { ProductsModule } from './products/products.module';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import config from './config/keys';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot(typeORMConfig),
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gpl', sortSchema: true }),
    MongooseModule.forRoot(config.mongoURI),
    AuthModule,
    ProductsModule,
    CatsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
