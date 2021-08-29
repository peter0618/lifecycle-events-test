import {
  Logger,
  Module,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';

@Module({
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule implements OnModuleInit, OnApplicationBootstrap {
  private readonly logger = new Logger(this.constructor.name);

  onApplicationBootstrap(): any {
    this.logger.debug(`onApplicationBootstrap()`);
  }

  onModuleInit(): any {
    this.logger.debug(`onModuleInit()`);
  }
}
