import {
  BeforeApplicationShutdown,
  Logger,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';

@Module({
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  private readonly logger = new Logger(this.constructor.name);

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
