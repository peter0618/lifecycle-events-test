import {
  BeforeApplicationShutdown,
  Logger,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [CatModule, DogModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  private readonly logger = new Logger(this.constructor.name);

  constructor() {
    this.logger.debug(`AppModule is constructed`);
  }

  onApplicationBootstrap(): any {
    this.logger.debug(`onApplicationBootstrap()`);
  }

  onModuleInit(): any {
    this.logger.debug(`onModuleInit()`);
  }

  onModuleDestroy(): any {
    this.logger.debug(`onModuleDestroy()`);
  }

  beforeApplicationShutdown(signal?: string): any {
    this.logger.debug(`beforeApplicationShutdown(signal: ${signal})`);
  }

  onApplicationShutdown(signal?: string): any {
    this.logger.debug(`onApplicationShutdown(signal: ${signal})`);
  }
}
