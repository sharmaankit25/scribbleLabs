import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common'
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import * as config from 'config'

async function bootstrap() {
  const serverConfig = config.get('server')
  const logger = new Logger('Bootstrap')
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser())

  if (process.env.NODE_ENV === 'development') {
    app.enableCors({
      origin: 'http://localhost:3000',
      credentials: true
    })
  }
  const port = process.env.PORT || serverConfig.port
  await app.listen(port);

  logger.log(`Application listening on port ${port}.`)
}
bootstrap();
