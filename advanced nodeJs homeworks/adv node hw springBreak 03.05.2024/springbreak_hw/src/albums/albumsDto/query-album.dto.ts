import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, IsUUID } from 'class-validator';

export class QueryAlbumsDTO {
  @ApiPropertyOptional({
    description: 'The name of the album',
    example: 'For All The Dogs',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: 'The release year of the album',
    example: 2023,
  })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  released?: number;

  @ApiPropertyOptional({
    description: 'The ID of the artist',
    example: '0e601898-0172-4372-8aef-ce62af73735f',
  })
  @IsUUID()
  @IsOptional()
  artistId?: string;
}
