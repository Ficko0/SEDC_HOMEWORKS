import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryArtistDTO {
  @ApiPropertyOptional({
    type: String,
    description: 'The name of the artst',
    example: 'Drake',
  })
  @IsString()
  @IsOptional()
  name?: string;
}
