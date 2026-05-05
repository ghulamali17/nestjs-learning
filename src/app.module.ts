import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrowseModule } from './browse/browse.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';

@Module({
  imports: [BrowseModule, ProductModule, CategoryModule, CustomerModule],
  controllers: [
    AppController,
    StudentController,
    MynameController,
    ExceptionController,
  ],
  providers: [AppService, StudentService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
