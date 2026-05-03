import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/customer.dto';
import type { Customer } from './interface/customer-interface';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAllCustomers(): Customer[] {
    return this.customerService.getAllCustomers();
  }

  @Post()
  createCustomer(@Body() createCustomerDto: CreateCustomerDto): Customer {
    return this.customerService.createCustomer(createCustomerDto);
  }
}
