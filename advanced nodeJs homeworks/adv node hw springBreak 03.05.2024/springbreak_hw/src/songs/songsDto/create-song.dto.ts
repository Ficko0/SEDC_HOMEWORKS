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
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  duration: number;

  @IsEnum(Genre)
  @IsNotEmpty()
  genre: Genre;

  @IsUUID()
  @IsOptional()
  artistId?: string;
}
