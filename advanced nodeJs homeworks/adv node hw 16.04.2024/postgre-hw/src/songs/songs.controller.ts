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
import { Song } from './songs.entity';
import { SongCreateDTO } from './dtos/song-create.dto';
import { SongUpdateDTO } from './dtos/song-update.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songService: SongsService) {}

  @Get('/')
  getSongs(): Promise<Song[]> {
    return this.songService.getSongs();
  }

  @Get('/:creatorId')
  getSong(@Param('creatorId') creatorId: string): Promise<Song> {
    return this.songService.getSongByUserID(creatorId);
  }

  @Post('/')
  createSong(@Body() body: SongCreateDTO): Promise<Song> {
    return this.songService.createSong(body);
  }

  @Put('/:id')
  updateSong(
    @Param('id') id: string,
    @Body() body: SongUpdateDTO,
  ): Promise<Song> {
    return this.songService.updateSong(id, body);
  }

  @Delete('/:id')
  deleteSong(@Param('id') id: string): Promise<void> {
    return this.songService.deleteSong(id);
  }
}
