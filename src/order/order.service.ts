import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderRepository } from './order.repository'; // Import the OrderRepository
import { Order } from './order.entity';
import { Book } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  async createOrder(createOrder: Book[]): Promise<Order> {
    try {
      // Use the orderRepository to create the order
      return this.orderRepository.createOrder(createOrder);
    } catch (error) {
      throw new NotFoundException('Failed to place order');
    }
  }
}
