import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { Genre } from '../../common/enums/songs.enum';

export class SongCreateDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  duration: number;

  @IsEnum(Genre)
  @IsNotEmpty()
  genre: Genre;

  @IsOptional()
  @IsUUID()
  artistId?: string;
}
