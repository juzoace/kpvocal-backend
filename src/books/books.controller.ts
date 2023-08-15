import { Controller, Get, Query, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { Book } from './books.entity';

@Controller('books')
@ApiTags('Books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get('all')
  async getBooks(
    @Query('page') page: number,
    @Query('pageSize', ParseIntPipe) pageSize: string,
  ): Promise<Partial<Book>[]> {
    return await this.booksService.getAllBooks(page, pageSize);
  }
}
