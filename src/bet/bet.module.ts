import { Module } from '@nestjs/common';
import { BetService } from './bet.service';
import { BetController } from './bet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bet } from './entities/bet.entity';
import { BetChannel } from 'src/bet-channel/entities/bet-channel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bet, BetChannel])],
  controllers: [BetController],
  providers: [BetService],
})
export class BetModule {}
