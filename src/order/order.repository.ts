/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order } from './order.entity';
import { Book } from './dto/create-order.dto';

@Injectable()
export class OrderRepository {
  constructor(private prisma: PrismaService) {}

  async createOrder(createOrder: Book[]): Promise<Order> {
    try {
      // Use the PrismaService directly (without creating a new prisma variable)
      return await this.prisma.$transaction(async (prisma) => {
        // Step 1: Create the order
        
        const order = await prisma.order.create({
          data: {
            quantity: createOrder.length, 
            totalAmount: createOrder.reduce((sum, order) => sum + (order.price || 0), 0),// You might need to calculate the total amount based on book prices
            created_at: new Date(), 
            updated_at: new Date(),
          },
        });

        // Step 2: Associate books with the order
        await Promise.all(
            createOrder.map(async (book) => {
            await prisma.booksOnOrder.create({
              data: {
                bookId: book.id,
                orderId: order.id,
              },
            });
          })
        );
        
        return order; // Return the created order
      });

      
    } catch (error) {
      throw new NotFoundException('Failed to place order');
    }
  }
}
