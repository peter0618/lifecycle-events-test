import {
  BeforeApplicationShutdown,
  Logger,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { DogService } from './dog.service';
import { DogController } from './dog.controller';

@Module({
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  private readonly logger = new Logger(this.constructor.name);

  constructor() {
    this.logger.debug(`DogModule is constructed`);
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
