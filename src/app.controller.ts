import {
  Controller,
  Get,
  Logger,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit, OnApplicationBootstrap {
  private readonly logger = new Logger(this.constructor.name);

  onApplicationBootstrap(): any {
    this.logger.debug(`onApplicationBootstrap()`);
  }

  onModuleInit(): any {
    this.logger.debug(`onModuleInit()`);
  }
  constructor(private readonly appService: AppService) {
    this.logger.debug(`AppController is constructed`);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
