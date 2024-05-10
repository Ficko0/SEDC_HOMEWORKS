import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateArtistDTO {
  @IsString()
  @IsNotEmpty()
  @Transform(({value}) => value.trim())
  name: string;

  @IsInt()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({value}) => value.trim())
  country: string;
}
