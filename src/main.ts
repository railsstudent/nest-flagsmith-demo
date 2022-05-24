import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ApiConfigService } from './core'

async function bootstrap() {
  const logger = new Logger('Main')
  const app = await NestFactory.create(AppModule)
  app.enableCors()

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  const configService = app.get(ApiConfigService)
  await app.listen(configService.portNumber, () =>
    logger.log(`Listening to http://localhost:${configService.portNumber}....`),
  )
}
bootstrap()
