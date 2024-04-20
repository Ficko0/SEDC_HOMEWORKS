import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Min, MinLength } from 'class-validator';

export class ArtistCreateDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @Transform(({ value }) => value.trim())
  @ApiProperty({
    type: String,
    description: 'Name of the artist',
    example: 'Ice Cube',
    minLength: 2,
    required: true,
  })
  name: string;

  @IsInt()
  @IsNotEmpty()
  @Min(20)
  @ApiProperty({
    type: Number,
    description: 'The age of the artist',
    example: 20,
    minimum: 20,
    required: true,
  })
  age: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @ApiProperty({
    type: String,
    description: 'Country of the artist',
    example: 'North America',
    required: true,
  })
  country: string;
}
