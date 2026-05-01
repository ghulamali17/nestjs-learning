import { Module } from '@nestjs/common';
import { BrowseService } from './browse.service';
import { BrowseController } from './browse.controller';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [ProductModule],
  providers: [BrowseService],
  controllers: [BrowseController]
})
export class BrowseModule {}
