import { Controller, Post, Body } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto'; // Import the CreateOrderDto
import { OrderService } from './order.service'; // Import the OrderService
import { Book } from './dto/create-order.dto';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  async createOrder(@Body() createOrderDto: Book[]) {
    const order = await this.orderService.createOrder(createOrderDto);
    return order;
  }
}
