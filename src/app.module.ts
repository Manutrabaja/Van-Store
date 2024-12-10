import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { ProductsService } from './services/products/products.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { UserController } from './controllers/user/user.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { BrandController } from './controllers/brand/brand.controller';
import { OrderController } from './controllers/order/order.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, UserController, CustomerController, BrandController, OrderController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
