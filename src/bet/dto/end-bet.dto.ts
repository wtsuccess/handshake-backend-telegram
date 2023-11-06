import { IsNotEmpty } from 'class-validator';

export class EndBetDTO {
  @IsNotEmpty()
  channelId: number;

  @IsNotEmpty()
  winners: string[];

  @IsNotEmpty()
  amounts: string[];
}
