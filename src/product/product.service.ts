import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products: Array<{ id: string; name: string; price: number }> = [
    {
      id: '1',
      name: 'Apple',
      price: 100,
    },
    {
      id: '2',
      name: 'Mango',
      price: 200,
    },
    {
      id: '3',
      name: 'Orange',
      price: 300,
    },
  ];

  getAll() {
    return this.products;
  }
  getById(id: string) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }
}
