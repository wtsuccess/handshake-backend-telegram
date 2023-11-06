import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString, MinDate } from 'class-validator';
import { isUnique } from 'src/validation/uniqueValidation';

export class CreateBetChannelDto {
  @IsNotEmpty()
  @isUnique({ tableName: 'bet_channel', column: 'betTitle' })
  betTitle: string;

  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  betDesc: string;

  @IsNotEmpty()
  // @IsNegative()
  minimumBetAmount: number;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @MinDate(new Date())
  betStartDate: Date;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @MinDate(new Date())
  betEndDate: Date;
}
