import {
  BeforeApplicationShutdown,
  Injectable,
  Logger,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Injectable()
export class DogService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  private readonly logger = new Logger(this.constructor.name);

  private isFinished = false;

  constructor() {
    this.logger.debug(`DogService is constructed`);
  }

  onApplicationBootstrap(): any {
    this.logger.debug(`onApplicationBootstrap()`);
  }

  onModuleInit(): any {
    this.logger.debug(`onModuleInit()`);
  }
  create(createDogDto: CreateDogDto) {
    return 'This action adds a new dog';
  }

  findAll() {
    return `This action returns all dog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  update(id: number, updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog`;
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }

  onModuleDestroy() {
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
