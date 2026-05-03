import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipe/uppercase/uppercase.pipe';

@Controller('myname')
export class MynameController {
  @Post('custom')
  getName(@Body('name', UppercasePipe) name: string) {
    return { message: `Hello ${name}` };
  }
}
