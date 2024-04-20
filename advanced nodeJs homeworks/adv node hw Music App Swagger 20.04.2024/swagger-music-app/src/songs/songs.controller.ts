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
import { SongsService } from './songs.service';
import { Song } from './song.entity';
import { SongCreateDTO } from './songsDto/song-create.dto';
import { SongUpdateDTO } from './songsDto/song-update.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true,
  }),
)
@ApiTags('Songs')
@Controller('songs')
export class SongsController {
  constructor(private readonly songService: SongsService) {}

  @Get('/')
  @ApiOperation({ summary: 'Retrieve the songs from the database' })
  @ApiOkResponse({ description: 'Songs retrieved succesfuly!' })
  getSongs(): Promise<Song[]> {
    return this.songService.getSongs();
  }

  @Post('/')
  @ApiOperation({ summary: 'Create a song' })
  @ApiCreatedResponse({ description: 'Song created succesfully!' })
  createSong(@Body() body: SongCreateDTO): Promise<Song> {
    return this.songService.createSong(body);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update a song based on its ID' })
  @ApiResponse({ description: 'Song updated succesfully!', status: 200 })
  updateSong(
    @Param('id') id: string,
    @Body() body: SongUpdateDTO,
  ): Promise<Song> {
    return this.songService.updateSong(id, body);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete a song based on its ID' })
  @ApiResponse({ description: 'Song deleted succesfully!', status: 204 })
  deleteSong(id: string): Promise<void> {
    return this.songService.deleteSong(id);
  }
}
