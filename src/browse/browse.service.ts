import { Injectable } from '@nestjs/common';
import { ProductService } from '../product/product.service';

@Injectable()
export class BrowseService {
  constructor(private readonly productService: ProductService) {}

  getAll() {
    return this.productService.getAll();
  }
}
