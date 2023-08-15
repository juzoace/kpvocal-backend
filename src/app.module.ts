import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { ConfigModule } from './config/config.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [BooksModule, ConfigModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
