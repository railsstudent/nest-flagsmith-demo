import { Module, OnModuleInit } from '@nestjs/common';
import { ApiConfigService } from './services';
import * as flagsmith from 'flagsmith-nodejs';

@Module({
  providers: [ApiConfigService],
  exports: [ApiConfigService],
})
export class CoreModule implements OnModuleInit {
  constructor(private configService: ApiConfigService) {}

  onModuleInit() {
    flagsmith.init({
      environmentID: this.configService.featureToggleApiKey,
      api: this.configService.featureToggleUrl,
    });
  }
}
