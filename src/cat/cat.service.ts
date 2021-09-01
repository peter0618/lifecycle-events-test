import {
  BeforeApplicationShutdown,
  Injectable,
  Logger,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  private readonly logger = new Logger(this.constructor.name);

  private isFinished = false;

  onModuleInit(): any {
    this.logger.debug(`onModuleInit()`);
  }

  onApplicationBootstrap(): any {
    this.logger.debug(`onApplicationBootstrap()`);
  }

  create(createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  findAll() {
    return `This action returns all cat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }

  onModuleDestroy(): any {
    this.logger.debug(`onModuleDestroy()`);
  }

  async beforeApplicationShutdown(signal?: string) {
    this.logger.debug(`beforeApplicationShutdown(signal: ${signal})`);
    // function sleep(ms) {
    //   return new Promise((r) => setTimeout(r, ms));
    // }
    // while (!this.isFinished) {
    //   await sleep(2000);
    //   this.isFinished = true;
    // }
  }

  async onApplicationShutdown(signal?: string) {
    this.logger.debug(`onApplicationShutdown(signal: ${signal})`);
    function sleep(ms) {
      return new Promise((r) => setTimeout(r, ms));
    }
    while (!this.isFinished) {
      await sleep(5000);
      this.isFinished = true;
    }
  }
}
