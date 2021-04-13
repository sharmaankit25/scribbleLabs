import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as config from 'config'
const dbConfig = config.get('db')
console.log(dbConfig)

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'ankit',
    password: 'password@123',
    database: 'nestjs-task-management',
    autoLoadEntities: true,
    synchronize: true, // In Production set this  to false
  }
