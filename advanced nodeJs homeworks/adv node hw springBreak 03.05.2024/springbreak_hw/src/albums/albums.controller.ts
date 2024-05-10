import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { Album } from './album.entity';
import { CreateAlbumDTO } from './albumDto/create-album.dto';
import { UpdateAlbumDTO } from './albumDto/update-album.dto';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumService: AlbumsService) {}

  @Get('/')
  getAlbums(): Promise<Album[]> {
    return this.albumService.getAlbums();
  }

  @Get('/:id')
  getAlbum(@Param('id') id: string): Promise<Album> {
    return this.albumService.getAlbum(id);
  }

  @Post('/')
  createAlbum(@Body() body: CreateAlbumDTO): Promise<Album> {
    return this.albumService.createAlbum(body);
  }

  @Put('/:id')
  updateAlbum(
    @Param('id') id: string,
    @Body() body: UpdateAlbumDTO,
  ): Promise<Album> {
    return this.albumService.updateAlbum(id, body);
  }

  @Delete('/:id')
  deleteAlbum(@Param('id') id: string): Promise<void> {
    return this.albumService.deleteAlbum(id);
  }
}
