import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as config from 'config'
// import { User } from '../auth/user.entity';
const dbConfig = config.get('db')
console.log(dbConfig)

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'ankit',
    password: 'password@123',
    database: 'nestjs-task-management',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    // entities: [User],
    synchronize: true,
  }
