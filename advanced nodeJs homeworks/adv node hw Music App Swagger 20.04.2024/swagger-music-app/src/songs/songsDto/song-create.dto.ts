import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { Genre } from 'src/common/enums/genre.enum';

export class SongCreateDTO {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @ApiProperty({
    type: String,
    description: 'Name of the song',
    example: 'Changes',
    required: true,
  })
  name: string;

  @IsInt()
  @IsNotEmpty()
  @Min(30)
  @ApiProperty({
    type: Number,
    description: 'Duration of the song in seconds',
    example: 200,
    minimum: 30,
    required: true,
  })
  duration: number;

  @IsEnum(Genre)
  @ApiProperty({
    enum: Genre,
    description: 'The genre of the song',
    example: Genre.HIP_HOP,
    required: true,
  })
  genre: Genre;

  @IsUUID()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description:
      "ID of the artist. If the artist doesn't have any songs, the value is null",
    default: null,
    example: '0868b3df-7527-4d9c-8725-21c33d302f07',
  })
  artistId?: string;
}
