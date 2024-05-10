import { Module } from '@nestjs/common';
import { ArtistModule } from './artist/artist.module';
import { SongsModule } from './songs/songs.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { AlbumsModule } from './albums/albums.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ArtistModule,
    SongsModule,
    AuthModule,
    AlbumsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
