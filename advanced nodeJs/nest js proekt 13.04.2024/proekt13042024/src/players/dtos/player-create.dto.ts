import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { Position } from '../../common/enums/position.enum'; // NE TREBA DA POCHNUVA SO .src FOLDEROT!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { Transform } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PlayerCreateDTO {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @ApiProperty({
    type: String,
    description: `The name of the player`,
    example: `John Doe`,
  })
  name: string;

  @IsInt()
  @Min(18)
  @ApiProperty({
    type: Number,
    description: `The age of the player`,
    example: 30,
    required: true,
    minimum: 13,
  })
  age: number;

  @IsEnum(Position)
  @ApiProperty({
    enum: Position,
    description: `The position of the player`,
    example: Position.MD,
    required: true,
  })
  position: Position;

  @IsNumber()
  @IsOptional()
  @Min(5)
  @ApiPropertyOptional({
    type: Number,
    minimum: 5,
    description: `Size of the shoe the player wears`,
    example: 5,
  })
  shoeSize?: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: `The country of the player`,
    example: `Argentina`,
    required: true,
  })
  country: string;

  @IsInt()
  @Min(0)
  @ApiPropertyOptional({
    type: Number,
    description: `The goals of the player`,
    example: 3,
    minimum: 0,
  })
  goals: number = 0;

  @IsInt()
  @Min(0)
  @ApiPropertyOptional({
    type: Number,
    description: `The assists of the player`,
    example: 3,
    minimum: 0,
  })
  assists: number = 0;

  @IsInt()
  @Min(0)
  @ApiPropertyOptional({
    type: Number,
    description: `The saves of the player`,
    example: 3,
    minimum: 0,
  })
  saves: number = 0;

  @IsInt()
  @Min(0)
  @ApiPropertyOptional({
    type: Number,
    description: `The matches of the player`,
    example: 3,
    minimum: 0,
  })
  matchesPlayed: number = 0;

  @IsUUID()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: `The ID of the club the player plays in`,
  })
  clubId?: string;
}
