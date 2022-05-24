import { Injectable } from '@nestjs/common';
import { FeatureToggleService } from './core';
import * as flagsmith from 'flagsmith-nodejs';

@Injectable()
export class AppService {
  constructor(private featureToggleService: FeatureToggleService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getFlags(): Promise<flagsmith.IFlags> {
    return this.featureToggleService.getFlags();
  }

  hasFeature(key: string): Promise<boolean> {
    return this.featureToggleService.hasFeature(key);
  }

  getValue(key: string, userId?: string): Promise<string | number | boolean> {
    return this.featureToggleService.getValue(key, userId);
  }

  getI18nFlag(userId: string, isDiginexUser: boolean) {
    const email = isDiginexUser
      ? `${userId}@diginex.com`
      : `${userId}@example.com`;

    flagsmith.setTrait(userId, 'email', email);
    return this.featureToggleService.getValue('is_18n_enabled', userId);
  }
}
