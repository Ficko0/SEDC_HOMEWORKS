import { ArtistService } from './artist.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('artists')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  getArtists(): any {
    return this.artistService.getArtsits();
  }

  @Post()
  createArtist(@Body() body: any) {
    return this.artistService.createArtist(body);
  }

  @Put('/:id')
  updateArtist(@Body() body: any, @Param('id') id: string) {
    return this.artistService.updateArtist(Number(id), body);
  }

  @Delete('?:id')
  deleteArtist(@Param('id') id: string) {
    return this.artistService.deleteArtist(Number(id));
  }
}
