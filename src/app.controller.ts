import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { FeatureToggleService } from './core';
import flagsmith from 'flagsmith-nodejs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly featureToggleService: FeatureToggleService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('features')
  hasFeature(@Query('key') key: string): Promise<boolean> {
    console.log('key', key);
    return this.featureToggleService.hasFeature(key);
  }

  @Get('flags')
  getFlags(): Promise<flagsmith.IFlags> {
    return this.featureToggleService.getFlags();
  }
}
