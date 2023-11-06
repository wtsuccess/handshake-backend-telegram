import { Test, TestingModule } from '@nestjs/testing';
import { BetChannelService } from './bet-channel.service';

describe('BetChannelService', () => {
  let service: BetChannelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BetChannelService],
    }).compile();

    service = module.get<BetChannelService>(BetChannelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
