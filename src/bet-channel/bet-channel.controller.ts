import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BetChannelService } from './bet-channel.service';
import { CreateBetChannelDto } from './dto/create-bet-channel.dto';
import { UpdateBetChannelDto } from './dto/update-bet-channel.dto';

@Controller('bet-channel')
export class BetChannelController {
  constructor(private readonly betChannelService: BetChannelService) {}

  @Post()
  create(@Body() createBetChannelDto: CreateBetChannelDto) {
    return this.betChannelService.create(createBetChannelDto);
  }

  @Get()
  findAll() {
    return this.betChannelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.betChannelService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBetChannelDto: UpdateBetChannelDto,
  ) {
    return this.betChannelService.update(+id, updateBetChannelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.betChannelService.remove(+id);
  }
}
