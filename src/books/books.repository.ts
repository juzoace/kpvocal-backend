import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Book } from './books.entity';

@Injectable()
export class BooksRepository {
  constructor(private prisma: PrismaService) {}

  async findManyWithPagination(skip: number, take: number): Promise<Book[]> {
    return this.prisma.book.findMany({
      skip,
      take,
    });
  }
}
