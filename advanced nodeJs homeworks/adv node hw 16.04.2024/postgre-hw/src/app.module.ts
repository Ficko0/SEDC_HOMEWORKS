import { Module } from '@nestjs/common';
import { ArtistsModule } from './artists/artists.module';
import { DatabaseModule } from './database/database.module';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [DatabaseModule, ArtistsModule, SongsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
