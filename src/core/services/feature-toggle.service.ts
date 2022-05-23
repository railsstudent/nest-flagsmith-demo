import { Injectable } from '@nestjs/common';
import * as flagsmith from 'flagsmith-nodejs';
import { FeatureToggleTrait } from '../interfaces';
@Injectable()
export class FeatureToggleService {
  hasFeature(key: string): Promise<boolean> {
    return flagsmith.hasFeature(key);
  }

  getValue(key: string): Promise<string | number | boolean> {
    return flagsmith.getValue(key);
  }

  getFlags(): Promise<flagsmith.IFlags> {
    return flagsmith.getFlags();
  }

  setTrait(trait: FeatureToggleTrait) {
    const { userId, key, value } = trait;
    flagsmith.setTrait(userId, key, value);
  }
}
