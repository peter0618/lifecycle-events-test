import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get<Logger>(Logger);
  logger.setContext('AppMain');

  app.enableShutdownHooks();

  await app.listen(3000, () => {
    logger.log(`app starts to listen on port 3000`);
  });
}
bootstrap();
