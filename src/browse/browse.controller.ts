import { Controller, Get } from '@nestjs/common';
import { BrowseService } from './browse.service';

@Controller('browse')
export class BrowseController {
  constructor(private readonly browseService: BrowseService) {}
  @Get()
  getAll() {
    return this.browseService.getAll();
  }
}
