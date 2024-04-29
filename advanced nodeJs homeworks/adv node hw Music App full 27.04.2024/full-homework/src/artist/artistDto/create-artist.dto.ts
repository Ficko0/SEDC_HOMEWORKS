import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateArtistDTO {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @ApiProperty({
    type: String,
    description: 'Name of the artist',
    example: 'John',
  })
  name: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'Age of the artist',
    example: 20,
  })
  age: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @ApiProperty({
    type: String,
    description: 'Country of the artist',
    example: 'United Kingdom',
  })
  country: string;
}
