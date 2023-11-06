import { Module } from '@nestjs/common';
import { BetChannelService } from './bet-channel.service';
import { BetChannelController } from './bet-channel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BetChannel } from './entities/bet-channel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BetChannel])],
  controllers: [BetChannelController],
  providers: [BetChannelService],
})
export class BetChannelModule {}
