import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cat_Model } from './category/Cat.module';
import { MongooseModule } from '@nestjs/mongoose'; 
import { Prod_Module } from './product/Prod.module';
import config from './config/keys'
import { Purch_Module } from './purchase/Purch.module';
import { SalesController } from './sales/sales.controller';
import { SalesModule } from './sales/sales.module';
import { AccountController } from './account/account.controller';
import { AccountService } from './account/account.service';
import { AccountModule } from './account/account.module';
import { SignupModule } from './signup/signup.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }),
    Cat_Model,
    Prod_Module,
    Purch_Module,SalesModule, AccountModule, SignupModule,
  ],
  controllers: [AppController, AccountController, ],
  providers: [AppService, AccountService],
})
export class AppModule {}
