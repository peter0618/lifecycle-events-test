import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
  OnApplicationBootstrap,
  Logger,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Controller('dog')
export class DogController
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

  constructor(private readonly dogService: DogService) {
    this.logger.debug(`DogController is constructed`);
  }

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }

  @Get()
  findAll() {
    return this.dogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogService.update(+id, updateDogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogService.remove(+id);
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
