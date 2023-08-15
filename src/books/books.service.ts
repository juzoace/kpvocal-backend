// src/books/books.service.ts
import { Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { Book } from './books.entity';

@Injectable()
export class BooksService {
  constructor(private booksRepository: BooksRepository) {}

  async getAllBooks(page: number, pageSize: string): Promise<Book[]> {
    const skip = (page - 1) * parseInt(pageSize, 10); // Convert pageSize to an integer
    const take = parseInt(pageSize, 10); // Convert pageSize to an integer

    return this.booksRepository.findManyWithPagination(skip, take);
  }
}
