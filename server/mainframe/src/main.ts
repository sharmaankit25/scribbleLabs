import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'
import * as config from 'config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const serverConfig = config.get('server')
  const logger = new Logger('Bootstrap')
  const app = await NestFactory.create(AppModule)

  app.use(cookieParser())

  app.setGlobalPrefix('api') //prefix api on all endpoints

  const options = new DocumentBuilder()
    .setTitle('ScribbleLabs Api')
    .setDescription('The ScribbleLabs API description')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'Token' },
      'access-token',
    )
    .addTag('scribble')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);


  if (process.env.NODE_ENV === 'development') {
    app.enableCors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  }
  const port = process.env.PORT || serverConfig.port
  await app.listen(port)

  logger.log(`Application listening on port ${port}.`)
}
bootstrap()
