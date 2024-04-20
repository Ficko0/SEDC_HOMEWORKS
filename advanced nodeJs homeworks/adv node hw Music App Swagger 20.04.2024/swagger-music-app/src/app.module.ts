import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ArtistModule } from './artist/artist.module';
import { SongsModule } from './songs/songs.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ArtistModule,
    SongsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
