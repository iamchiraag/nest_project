import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PartyController } from './party.controller';
import { Party_Schema } from './party.schema';
import { PartyService } from './party.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'party', schema: Party_Schema }])
  ],
  controllers: [PartyController],
  providers: [PartyService]
})
export class PartyModule {}
