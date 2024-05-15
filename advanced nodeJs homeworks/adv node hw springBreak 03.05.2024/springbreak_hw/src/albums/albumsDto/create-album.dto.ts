import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateAlbumDTO {
  @ApiProperty({
    description: 'Name of the album',
    example: 'For All The Dogs',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Release year of the album',
    example: 2023,
  })
  @IsInt()
  @IsNotEmpty()
  released: number;

  @ApiPropertyOptional({
    description: 'The ID of the artist',
    example: '0e601898-0172-4372-8aef-ce62af73735f',
  })
  @IsOptional()
  @IsUUID()
  artistId?: string;
}
