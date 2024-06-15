import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';
import { SongsQueryDto } from './dto/song-query.dto';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {}

  // Get song by duration and genre
  findAll() {
    return this.songRepository
      .createQueryBuilder('song')
      .leftJoinAndSelect('song.genres', 'genre')
      .where('song.duration < :maxDuration', { maxDuration: '5 minutes' })
      .andWhere('genre.id IN (:...genreIds)', { genreIds: [1, 2, 3] })
      .getMany();
  }

  // Get songs by a specific query
  findAll2({ search, take, skip, explicit, genre }: SongsQueryDto) {
    const query = this.songRepository.createQueryBuilder('song');

    if (search) {
      query.andWhere('song.name ILIKE :search', { search: `%${search}%` });
    }

    if (explicit) {
      query.andWhere('song.explicit = :explicit', { explicit });
    }

    if (genre) {
      query
        .leftJoin('song.genres', 'genre')
        .andWhere('genre.name = :name', { name: genre });
    }

    query.take(take).skip(skip);

    query.getMany();
  }

  //
  findAll3() {
    return this.songRepository
      .createQueryBuilder('song')
      .leftJoinAndSelect('song.playlists', 'playlist')
      .leftJoinAndSelect('song.artist', 'artist')
      .leftJoinAndSelect('song.album', 'album')
      .where('playlist.id = :id', { id: 1 })
      .getMany();
  }
}
