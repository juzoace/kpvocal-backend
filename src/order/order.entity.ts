import { Prisma } from '@prisma/client';

export class Order {
  id: number;
  quantity: number;
  totalAmount: number;
  created_at: Date;
  updated_at: Date;
  books?: Prisma.BooksOnOrderCreateNestedManyWithoutBookInput;
}
