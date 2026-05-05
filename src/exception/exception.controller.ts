import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BadGatewayException } from '@nestjs/common';

@Controller('exception')
export class ExceptionController {
  @Get('hello/:id')
  getHello(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return 'Hello ' + id;
  }
}
