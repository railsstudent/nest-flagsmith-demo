import { Module, OnModuleInit } from '@nestjs/common'
import * as flagsmith from 'flagsmith-nodejs'
import { ApiConfigService, FeatureToggleService } from './services'

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
    })
  }
}
