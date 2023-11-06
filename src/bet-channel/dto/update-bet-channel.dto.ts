import { PartialType } from '@nestjs/mapped-types';
import { CreateBetChannelDto } from './create-bet-channel.dto';

export class UpdateBetChannelDto extends PartialType(CreateBetChannelDto) {}
