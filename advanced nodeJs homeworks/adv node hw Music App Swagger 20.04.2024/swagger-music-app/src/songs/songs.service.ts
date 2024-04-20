import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './song.entity';
import { Repository } from 'typeorm';
import { SongCreateDTO } from './songsDto/song-create.dto';
import { SongUpdateDTO } from './songsDto/song-update.dto';

@Injectable()
export class SongsService {
  constructor(@InjectRepository(Song) private songRepo: Repository<Song>) {}

  async getSongs(): Promise<Song[]> {
    return this.songRepo.find({
      relations: {
        artist: true,
      },
    });
  }

  async createSong(body: SongCreateDTO): Promise<Song> {
    const song = this.songRepo.create(body);

    return this.songRepo.save(song);
  }

  async updateSong(id: string, body: SongUpdateDTO): Promise<Song> {
    const song = await this.songRepo.findOneByOrFail({ id });

    const updatedSong = this.songRepo.merge(song, body);

    return this.songRepo.save(updatedSong);
  }

  async deleteSong(id: string): Promise<void> {
    await this.songRepo.delete({ id });
  }
}
