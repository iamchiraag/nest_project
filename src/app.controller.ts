import { Controller, Get, Render, Req, UseInterceptors, Post, Body, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Get()
  @Render('index.pug')
  abc() {
    return { message: 'Hello chirag!' };
  }
  @Get('/sales')
  @Render('sales.pug')
  sales() {
    return { message: 'Hello chirag!' };
  }
  @Get('/sparty')
  @Render('Sales_Party.pug')
  sales_party() {
    return { message: 'Hello chirag!' };
  }
  
  

  @Get('/product')
  @Render('product.pug')
  public product( @Req() req) {
    return { user: req.user };
  }
  @Get('/purchase')
  @Render('purchase.pug')
  public purchase( @Req() req) {
    return { user: req.user };
  }
  @Get('/party')
  @Render('Purch_Party.pug')
  public purchase_party( @Req() req) {
    return { user: req.user };
  }
  @Get('/account')
  @Render('signup.pug')
  public Account( @Req() req) {
    return { user: req.user };
  }


  

}
