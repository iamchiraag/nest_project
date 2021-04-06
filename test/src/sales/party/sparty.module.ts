import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SPartyController } from './sparty.controller';
import { Party_Schema } from './sparty.schema';
import { PartyService } from './sparty.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sparty', schema: Party_Schema }])
  ],
  controllers: [SPartyController],
  providers: [PartyService]
})
export class PartyModule {}
