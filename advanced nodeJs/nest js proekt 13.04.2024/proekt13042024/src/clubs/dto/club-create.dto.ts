import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, IsInt, Min, IsDateString } from 'class-validator';

export class ClubCreateDTO {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  name: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  stadium: string;

  @IsString()
  @IsNotEmpty()
  league: string;

  @IsInt()
  @Min(0)
  wins: number = 0;

  @IsInt()
  @Min(0)
  losses: number = 0;

  @IsInt()
  @Min(0)
  draws: number = 0;
}
