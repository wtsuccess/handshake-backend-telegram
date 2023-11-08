import { Injectable } from '@nestjs/common';
import { CreateBetChannelDto } from './dto/create-bet-channel.dto';
import { UpdateBetChannelDto } from './dto/update-bet-channel.dto';
import { BetChannel } from './entities/bet-channel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { generateWalletAddress } from 'src/utils/helper';

@Injectable()
export class BetChannelService {
  constructor(
    @InjectRepository(BetChannel)
    private readonly betChannelRepository: Repository<BetChannel>,
  ) {}

  create(createBetChannelDto: CreateBetChannelDto): boolean {
    const betChannel = new BetChannel();
    betChannel.betTitle = createBetChannelDto.betTitle;
    betChannel.betCreatorAddress = generateWalletAddress(
      createBetChannelDto.userName,
    );
    betChannel.betDesc = createBetChannelDto.betDesc;
    betChannel.minimumBetAmount = createBetChannelDto.minimumBetAmount;
    betChannel.betStartDate = createBetChannelDto.betStartDate;
    betChannel.betEndDate = createBetChannelDto.betEndDate;
    this.betChannelRepository.save(betChannel);
    return true;
  }

  findAll(): Promise<BetChannel[]> {
    const betChannels = this.betChannelRepository.find();
    return betChannels;
  }

  findOne(id: number): Promise<BetChannel> {
    const betChannel = this.betChannelRepository.findOneBy({ id });
    return betChannel;
  }

  update(
    id: number,
    updateBetChannelDto: UpdateBetChannelDto,
  ): Promise<UpdateResult> {
    return this.betChannelRepository.update(id, updateBetChannelDto);
  }

  remove(id: number) {
    return `This action removes a #${id} betChannel`;
  }
}
