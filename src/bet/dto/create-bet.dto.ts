import { IsNotEmpty } from 'class-validator';

export class CreateBetDto {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  betChannelId: number;

  @IsNotEmpty()
  wager: number;
}
