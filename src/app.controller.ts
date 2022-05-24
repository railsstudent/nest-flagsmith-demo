import { Controller, Get, Param, ParseBoolPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';
import flagsmith from 'flagsmith-nodejs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('has-feature')
  hasFeature(@Query('key') key: string): Promise<boolean> {
    return this.appService.hasFeature(key);
  }

  @Get('values')
  getValue(@Query('key') key: string): Promise<boolean | string | number> {
    return this.appService.getValue(key);
  }

  @Get('flags')
  getFlags(): Promise<flagsmith.IFlags> {
    return this.appService.getFlags();
  }

  @Get(':id/values')
  getValueWithIdentity(
    @Param('id') userId: string,
    @Query('key') key: string,
  ): Promise<boolean | string | number> {
    return this.appService.getValue(key, userId);
  }

  @Get(':id/i18n')
  getValueWithSegmentOverride(
    @Param('id') userId: string,
    @Query('isDiginexUser', ParseBoolPipe) isDiginexUser: boolean,
  ): Promise<boolean | string | number> {
    return this.appService.getI18nFlag(userId, isDiginexUser);
  }
}
