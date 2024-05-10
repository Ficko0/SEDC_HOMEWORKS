import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { Artist } from 'src/artist/artist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Album])],
  providers: [AlbumsService],
  controllers: [AlbumsController],
})
export class AlbumsModule {}
