import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Position } from '../../common/enums/position.enum'; // NE TREBA DA POCHNUVA SO .src FOLDEROT!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { Transform } from 'class-transformer';

export class PlayerCreateDTO {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  name: string;

  @IsInt()
  @Min(18)
  age: number;

  @IsEnum(Position)
  position: Position;

  @IsNumber()
  @IsOptional()
  @Min(5)
  shoeSize?: number;

  @IsString()
  country: string;

  @IsInt()
  @Min(0)
  goals: number = 0;

  @IsInt()
  @Min(0)
  assists: number = 0;

  @IsInt()
  @Min(0)
  saves: number = 0;

  @IsInt()
  @Min(0)
  matchesPlayed: number = 0;
}
