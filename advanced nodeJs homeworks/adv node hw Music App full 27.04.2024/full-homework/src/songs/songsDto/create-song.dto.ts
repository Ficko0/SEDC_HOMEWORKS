import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { Genre } from 'src/common/enums/genre.enum';

export class CreateSongDTO {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @ApiProperty({
    type: String,
    description: 'Name of the song',
    example: 'Break ya neck',
  })
  name: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'Duration of the song in seconds',
    example: 200,
  })
  duration: number;

  @IsEnum(Genre)
  @IsNotEmpty()
  @ApiProperty({
    enum: Genre,
    enumName: 'genre',
    description: 'Genre of the song',
    example: Genre.HIP_HOP,
  })
  genre: Genre;

  @IsUUID()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description:
      "ID of the artist. If the song doesn't have an artist, the value is set to null",
    example: 'a2b946ba-ca3f-4e4a-b0b5-1b7bed0e6284',
  })
  artistId?: string;
}
