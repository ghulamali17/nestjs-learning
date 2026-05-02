import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrowseModule } from './browse/browse.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';

@Module({
  imports: [BrowseModule, ProductModule, CategoryModule],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
