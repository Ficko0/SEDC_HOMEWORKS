import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SongService } from './songs.service';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get()
  getSongs(): any {
    return this.songService.getSongs();
  }

  @Get('/:id')
  getSongsByID(@Param('id') id: string): any {
    return this.songService.getSongsByID(Number(id));
  }

  @Get('/:userId')
  getSongsByUserId(@Param('userId') userId: string): any {
    return this.songService.getSongByUserID(Number(userId));
  }

  @Post()
  createSong(@Body() body: any) {
    return this.songService.createSong(body);
  }

  @Put('/:id')
  updateSong(@Body() body: any, @Param('id') id: string) {
    return this.songService.updateSong(Number(id), body);
  }

  @Delete('/:id')
  deleteSong(@Param('id') id: string) {
    return this.songService.deleteSong(Number(id));
  }
}
