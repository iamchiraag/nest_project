import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cat_Model } from './category/Cat.module';
import { MongooseModule } from '@nestjs/mongoose'; 
import { Prod_Module } from './product/Prod.module';
import config from './config/keys'
import { Purch_Module } from './purchase/Purch.module';

import { SalesModule } from './sales/sales.module';
import { SignupModule } from './signup/signup.module';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }),
    Cat_Model,
    Prod_Module,
    Purch_Module,SalesModule,  SignupModule,  UsersModule, AuthModule, AccountModule,
  ],
  controllers: [AppController,  ],
  providers: [AppService,],
})
export class AppModule {}
