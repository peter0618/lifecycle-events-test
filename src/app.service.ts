import {
  Injectable,
  Logger,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit, OnApplicationBootstrap {
  private readonly logger = new Logger(this.constructor.name);

  constructor() {
    this.logger.debug(`AppService is constructed`);
  }

  onApplicationBootstrap(): any {
    this.logger.debug(`onApplicationBootstrap()`);
  }

  onModuleInit(): any {
    this.logger.debug(`onModuleInit()`);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
