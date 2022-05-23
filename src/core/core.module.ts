import { Module, OnModuleInit } from '@nestjs/common';
import { ApiConfigService, FeatureToggleService } from './services';
import * as flagsmith from 'flagsmith-nodejs';

@Module({
  providers: [ApiConfigService, FeatureToggleService],
  exports: [ApiConfigService, FeatureToggleService],
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
