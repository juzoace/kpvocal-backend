import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private nestConfigService: NestConfigService) {}

  get mySqlUrl(): string {
    return this.nestConfigService.get<string>('DATABASE_URL');
  }

  // Add other environment variables as needed
}
