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

  create(createBetChannelDto: CreateBetChannelDto): Promise<BetChannel> {
    console.log(createBetChannelDto);
    const betChannel = new BetChannel();
    betChannel.betTitle = createBetChannelDto.betTitle;
    betChannel.betCreatorAddress = generateWalletAddress(
      createBetChannelDto.userName,
    );
    betChannel.betDesc = createBetChannelDto.betDesc;
    betChannel.minimumBetAmount = createBetChannelDto.minimumBetAmount;
    betChannel.betStartDate = createBetChannelDto.betStartDate;
    betChannel.betEndDate = createBetChannelDto.betEndDate;
    // betChannel.betLink = betChannel.betTitle + betChannel.betCreatorAddress;
    return this.betChannelRepository.save(betChannel);
  }

  findAll() {
    return `This action returns all betChannel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} betChannel`;
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
