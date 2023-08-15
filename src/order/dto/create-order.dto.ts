/* eslint-disable prettier/prettier */
import { IsArray, IsString, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class Book {
  @IsNumber()
  id: number;

  // Other book properties if needed
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;

  @IsNumber()
  price: number;

  @IsNumber()
  discount: number;
}

export class CreateOrderDto {
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Book)
  books: Book[];
}
