// config.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigService } from './config.service';
import { join } from 'path';

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: join(process.cwd(), '.env'), // Load .env from the root directory
      isGlobal: true, // Make the configuration global
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
