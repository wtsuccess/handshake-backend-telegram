import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateBetDto } from './dto/create-bet.dto';
import { UpdateBetDto } from './dto/update-bet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bet } from './entities/bet.entity';
import { Repository } from 'typeorm';
import { createBetChannel, endBet, placeBet } from 'src/utils/contracts/escrow';
import { BetChannel } from 'src/bet-channel/entities/bet-channel.entity';
import { EndBetDTO } from './dto/end-bet.dto';
import { generateWalletAddress } from 'src/utils/helper';
import { CreateBet } from './@types/createBetChannel';
@Injectable()
export class BetService {
  constructor(
    @InjectRepository(Bet)
    private readonly betRepository: Repository<Bet>,
    @InjectRepository(BetChannel)
    private readonly betChannelRepository: Repository<BetChannel>,
  ) {}

  async create(createBetDto: CreateBetDto): Promise<CreateBet> {
    try {
      let createChannelHash = '';

      const bet = new Bet();
      bet.bettorAddress = generateWalletAddress(createBetDto.userName);
      bet.betChannelId = Number(createBetDto.betChannelId);
      bet.wager = createBetDto.wager;
      bet.option = createBetDto.option;

      const betChannel = await this.betChannelRepository.findOne({
        where: {
          id: bet.betChannelId,
        },
      });

      if (betChannel.isPublished && !betChannel.isActive)
        throw new BadRequestException('Bet could be done only between 2 users');
      if (new Date() < betChannel.betStartDate) 
        throw new BadRequestException('Bet is not started yet.');
      if (new Date() > betChannel.betEndDate)
        throw new BadRequestException('Bet was already ended.');

      if (
        betChannel && !betChannel.isPublished
      ) {
        createChannelHash = await createBetChannel(
          betChannel.betCreatorAddress,
          betChannel.betTitle,
          betChannel.betDesc,
          betChannel.betStartDate,
          betChannel.betEndDate,
          betChannel.minimumBetAmount,
        );
        if (createChannelHash == '')
          throw new BadRequestException('Channel Creation Failed');
        betChannel.isPublished = true;
        this.betChannelRepository.update(betChannel.id, betChannel);
      }

      const contractId: number = bet.betChannelId + 43 - 23;
      const { mintHash, betHash } = await placeBet(
        bet.bettorAddress,
        contractId,
        bet.wager,
      );

      if (mintHash === '' || betHash === '')
        throw new BadRequestException('Bet Failed');
      betChannel.isActive = !betChannel.isActive;
      this.betRepository.save(bet);
      this.betChannelRepository.update(betChannel.id, betChannel);
      return { createChannelHash, mintHash, betHash };
    } catch (err) {
      console.log("Error occurd: ", err);
    }
  }

  async endBet(endBetDto: EndBetDTO): Promise<string> {
    const contractId: number = Number(endBetDto.channelId) + 23 - 6;
    const res: string = await endBet(
      contractId,
      endBetDto.winners,
      endBetDto.amounts,
    );
    return res;
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
