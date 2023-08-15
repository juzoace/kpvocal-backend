import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { Book } from './dto/create-order.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('orders')
@ApiTags('Orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiBody({ type: [Book], description: 'Array of books in the order' })
  async createOrder(@Body() createOrderDto: Book[]) {
    const order = await this.orderService.createOrder(createOrderDto);
    return order;
  }
}
