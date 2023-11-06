import { Test, TestingModule } from '@nestjs/testing';
import { BetChannelController } from './bet-channel.controller';
import { BetChannelService } from './bet-channel.service';

describe('BetChannelController', () => {
  let controller: BetChannelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BetChannelController],
      providers: [BetChannelService],
    }).compile();

    controller = module.get<BetChannelController>(BetChannelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
