import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateArtistDTO {
  @ApiProperty({
    type: String,
    description: 'The name of the artist',
    example: 'Drake',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: Number,
    description: 'The age of the artist',
    example: 20,
  })
  @IsInt()
  @IsNotEmpty()
  age: number;

  @ApiProperty({
    type: String,
    description: 'The country of the artist',
    example: 'Macedonia',
  })
  @IsString()
  @IsNotEmpty()
  country: string;
}
