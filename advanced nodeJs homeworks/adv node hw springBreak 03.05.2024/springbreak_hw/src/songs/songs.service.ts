import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './song.entity';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CreateSongDTO } from './songsDto/create-song.dto';
import { UpdateSongDTO } from './songsDto/update-song.dto';
import { QuerySongsDTO } from './songsDto/query-song.dto';

@Injectable()
export class SongsService {
  constructor(@InjectRepository(Song) private songRepo: Repository<Song>) {}

  async getSongs({ name }: QuerySongsDTO): Promise<Song[]> {
    let query = {} satisfies FindOptionsWhere<Song>;

    if (name) {
      query = {
        ...query,
        name: ILike(`%${name}%`),
      };
    }

    return this.songRepo.find({
      where: query,
      order: {
        duration: 'ASC',
      },
      relations: {
        artist: true,
        album: true,
      },
    });
  }

  async getSong(id: string): Promise<Song> {
    return this.songRepo.findOneBy({ id });
  }

  async createSong(body: CreateSongDTO): Promise<Song> {
    const newSong = this.songRepo.create(body);

    return this.songRepo.save(newSong);
  }

  async updateSong(id: string, body: UpdateSongDTO): Promise<Song> {
    const song = await this.songRepo.findOneByOrFail({ id });

    const updatedSong = this.songRepo.merge(song, body);

    return this.songRepo.save(updatedSong);
  }

  async deleteSong(id: string): Promise<void> {
    await this.songRepo.delete({ id });
  }
}
