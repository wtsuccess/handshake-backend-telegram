import { Injectable } from '@nestjs/common';
import { CreateBetDto } from './dto/create-bet.dto';
import { UpdateBetDto } from './dto/update-bet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bet } from './entities/bet.entity';
import { Repository } from 'typeorm';
import { createBetChannel, endBet, placeBet } from 'src/utils/contracts/escrow';
import { BetChannel } from 'src/bet-channel/entities/bet-channel.entity';
import { EndBetDTO } from './dto/end-bet.dto';
import { generateWalletAddress } from 'src/utils/helper';

@Injectable()
export class BetService {
  constructor(
    @InjectRepository(Bet)
    private readonly betRepository: Repository<Bet>,
    @InjectRepository(BetChannel)
    private readonly betChannelRepository: Repository<BetChannel>,
  ) {}

  async create(createBetDto: CreateBetDto) {
    const bet = new Bet();
    bet.bettorAddress = generateWalletAddress(createBetDto.userName);
    bet.betChannelId = createBetDto.betChannelId;
    bet.wager = createBetDto.wager;

    const betChannel = await this.betChannelRepository.findOne({
      where: {
        id: bet.betChannelId,
      },
    });
    console.log('betChannel', betChannel);

    try {
      if (
        betChannel &&
        betChannel.isPublished === false &&
        new Date() >= betChannel.betStartDate &&
        new Date() <= betChannel.betEndDate
      ) {
        await createBetChannel(
          betChannel.betCreatorAddress,
          betChannel.betTitle,
          betChannel.betDesc,
          betChannel.betStartDate,
          betChannel.betEndDate,
          betChannel.minimumBetAmount,
        );
        betChannel.isPublished = true;
        this.betChannelRepository.update(betChannel.id, betChannel);
      }
    } catch (err) {
      console.log('createBet err', err);
    }

    const contractId = Number(bet.betChannelId + '') + 20;
    await placeBet(bet.bettorAddress, contractId, bet.wager);
    this.betRepository.save(bet);
    return true;
  }

  async endBet(endBetDto: EndBetDTO) {
    const contractId = Number(endBetDto.channelId + '') + 20;
    await endBet(contractId, endBetDto.winners, endBetDto.amounts);
  }

  findAll() {
    return `This action returns all bet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bet`;
  }

  update(id: number, updateBetDto: UpdateBetDto) {
    return `This action updates a #${id} bet`;
  }

  remove(id: number) {
    return `This action removes a #${id} bet`;
  }
}
