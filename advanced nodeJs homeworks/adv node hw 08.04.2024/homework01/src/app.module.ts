import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistModule } from './artist/artist.module';
import { SongModule } from './songs/songs.module';
import { ArtistController } from './artist/artist.controller';
import { ArtistService } from './artist/artist.service';
import { SongController } from './songs/songs.controller';
import { SongService } from './songs/songs.service';

@Module({
  imports: [ArtistModule, SongModule],
  controllers: [AppController, ArtistController, SongController],
  providers: [AppService, ArtistService, SongService],
})
export class AppModule {}
