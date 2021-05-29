import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ItemsModule } from './items/items.module'
import { ProductsModule } from './products/products.module'
import { CatsModule } from './cats/cats.module'
import { AuthModule } from './auth/auth.module'
import config from './config/keys'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeORMConfig } from './config/typeorm.config'
import { TasksModule } from './tasks/tasks.module'
import { SettingsController } from './settings/settings.controller'
import { CaslModule } from './casl/casl.module'
import { RolesAndPermissionsModule } from './roles-and-permissions/roles-and-permissions.module'
import { EmployeesModule } from './employees/employees.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    MongooseModule.forRoot(config.mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      autoIndex: true,
    }),
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gpl', sortSchema: true }),
    ItemsModule,
    EmployeesModule,
    CatsModule,
    RolesAndPermissionsModule,
    AuthModule,
    ProductsModule,
    TasksModule,
    CaslModule,
  ],
  controllers: [AppController, SettingsController],
  providers: [AppService],
})
export class AppModule {}
