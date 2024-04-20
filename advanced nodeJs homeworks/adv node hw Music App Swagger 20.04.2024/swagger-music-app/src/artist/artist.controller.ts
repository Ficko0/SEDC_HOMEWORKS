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
import { ArtistService } from './artist.service';
import { Artist } from './artitst.entity';
import { ArtistCreateDTO } from './artistDto/artist-create.dto';
import { ArtistUpdateDTO } from './artistDto/artist-update.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiResponse,
} from '@nestjs/swagger';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true,
  }),
)
@ApiTags('Artists')
@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('/')
  @ApiOperation({ summary: 'Retrieve the artists from the database' })
  @ApiOkResponse({ description: 'All artists retrieved' })
  getArtists(): Promise<Artist[]> {
    return this.artistService.getArtists();
  }

  @Post('/')
  @ApiOperation({ summary: 'Create an artist' })
  @ApiOkResponse({ description: 'Artist created succesfully!' })
  createArtist(@Body() body: ArtistCreateDTO): Promise<Artist> {
    return this.artistService.createArist(body);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update an artist based on his ID' })
  @ApiCreatedResponse({
    description: 'Artist updated succesfully!',
    status: 200,
  })
  updateArtist(
    @Param('id') id: string,
    @Body() body: ArtistUpdateDTO,
  ): Promise<Artist> {
    return this.artistService.updateArtist(id, body);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete an artist based on his ID' })
  @ApiResponse({ description: 'Artist deleted succesfully!', status: 204 })
  deleteArtist(id: string): Promise<void> {
    return this.artistService.deleteArtist(id);
  }
}
