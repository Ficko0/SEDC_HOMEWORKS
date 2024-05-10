import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from './song.entity';
import { CreateSongDTO } from './songDto/create-song.dto';
import { UpdateSongDTO } from './songDto/update-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songService: SongsService) {}

  @Get('/')
  getSongs(): Promise<Song[]> {
    return this.songService.getSongs();
  }

  @Get('/:id')
  getSong(@Param('id') id: string): Promise<Song> {
    return this.songService.getSong(id);
  }

  @Post('/')
  createSong(@Body() body: CreateSongDTO): Promise<Song> {
    return this.songService.createSong(body);
  }

  @Put('/:id')
  updateSong(
    @Param('id') id: string,
    @Body() body: UpdateSongDTO,
  ): Promise<Song> {
    return this.songService.updateSong(id, body);
  }

  @Delete('/:id')
  deleteSong(@Param('id') id: string): Promise<void> {
    return this.songService.deleteSong(id);
  }
}
