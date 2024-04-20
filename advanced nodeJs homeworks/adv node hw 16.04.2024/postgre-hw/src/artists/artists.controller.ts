import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { Artist } from './artist.entity';
import { ArtistCreateDTO } from './dtos/artist-create.dto';
import { ArtistUpdateDTO } from './dtos/artist-update.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true,
  }),
)
@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistService: ArtistsService) {}

  @Get('/')
  getArtists(): Promise<Artist[]> {
    return this.artistService.getArtists();
  }

  @Get('/:id')
  getArtist(@Param('id') id: string): Promise<Artist> {
    return this.artistService.getArtist(id);
  }

  @Post('/')
  createArtist(@Body() body: ArtistCreateDTO): Promise<Artist> {
    return this.artistService.createAritst(body);
  }

  @Put('/:id')
  updateArtist(
    @Param('id') id: string,
    @Body() body: ArtistUpdateDTO,
  ): Promise<Artist> {
    return this.artistService.updateArtist(id, body);
  }

  @Delete('/:id')
  deleteArtist(@Param('id') id: string): Promise<void> {
    return this.artistService.deleteArtist(id);
  }
}
