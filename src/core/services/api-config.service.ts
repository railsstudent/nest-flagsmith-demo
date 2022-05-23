import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get featureToggleUrl(): string {
    return this.configService.get<string>('FLAGSMITH_API_URL');
  }

  get featureToggleApiKey(): string {
    return this.configService.get<string>('FLAGSMITH_API_KEY');
  }

  get appEnv(): string {
    return this.configService.get<string>('APP_ENV');
  }

  get portNumber(): number {
    return this.configService.get<number>('PORT');
  }
}
