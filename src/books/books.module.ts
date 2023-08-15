import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaService } from '../prisma/prisma.service';
import { BooksRepository } from './books.repository';

@Module({
  providers: [BooksService, BooksRepository, PrismaService],
  controllers: [BooksController],
})
export class BooksModule {}
