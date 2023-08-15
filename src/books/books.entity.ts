import { Prisma } from '@prisma/client';

export class Book {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  discount: number;
  orders?: Prisma.BooksOnOrderCreateNestedManyWithoutBookInput;
}
