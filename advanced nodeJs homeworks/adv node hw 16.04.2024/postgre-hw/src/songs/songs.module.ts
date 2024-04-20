import { SongsController } from './songs.controller';
import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './songs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  providers: [SongsService],
  controllers: [SongsController],
})
export class SongsModule {}
