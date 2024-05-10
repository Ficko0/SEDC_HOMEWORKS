import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArtistService } from './artist.service';
import { Artist } from './artist.entity';
import { CreateArtistDTO } from './artistDto/create-artist.dto';
import { UpdateArtistDTO } from './artistDto/update-artist.dto';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('/')
  getArtists(): Promise<Artist[]> {
    return this.artistService.getArtists();
  }

  @Get('/:id')
  getArtist(@Param('id') id: string): Promise<Artist> {
    return this.artistService.getArtist(id);
  }

  @Post('/')
  createArtist(@Body() body: CreateArtistDTO): Promise<Artist> {
    return this.artistService.createArtist(body);
  }

  @Put('/:id')
  updateArtist(
    @Param('id') id: string,
    @Body() body: UpdateArtistDTO,
  ): Promise<Artist> {
    return this.artistService.updateArtist(id, body);
  }

  @Delete('/:id')
  deleteArtist(@Param('id') id: string): Promise<void> {
    return this.artistService.deleteArtist(id);
  }
}
