import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QuerySongsDTO {
  @ApiPropertyOptional({
    type: String,
    description: 'The name of the song',
    example: 'Calling For You',
  })
  @IsString()
  @IsOptional()
  name?: string;
}
