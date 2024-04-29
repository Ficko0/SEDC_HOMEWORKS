import { Module } from '@nestjs/common';
import { ArtistModule } from './artist/artist.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { SongsModule } from './songs/songs.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ArtistModule,
    SongsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
