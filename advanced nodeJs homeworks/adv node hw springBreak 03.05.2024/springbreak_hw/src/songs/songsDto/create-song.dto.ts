import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Genre } from 'src/common/enums/genre.enum';

export class CreateSongDTO {
  @ApiProperty({
    type: String,
    description: 'The name of the song',
    example: 'Calling For You',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: Number,
    description: 'The duration of the song in seconds',
    example: 200,
  })
  @IsInt()
  @IsNotEmpty()
  duration: number;

  @ApiProperty({
    enum: Genre,
    description: 'The genre of the song',
    example: Genre.FUNK,
  })
  @IsEnum(Genre)
  @IsNotEmpty()
  genre: Genre;

  @ApiPropertyOptional({
    type: String,
    description: 'The ID of the artist',
    example: '0e601898-0172-4372-8aef-ce62af73735f',
  })
  @IsUUID()
  @IsOptional()
  artistId?: string;

  @ApiPropertyOptional({
    type: String,
    description: 'The ID of the album',
    example: '0e601898-0172-4372-8aef-ce62af73735f',
  })
  @IsOptional()
  @IsUUID()
  albumId?: string;
}
