import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './genre.entity';
import { GenresQueryDto } from './dto/genre-query.dto';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
  ) {}

  // Get genres by name
  findAll({ search }: GenresQueryDto) {
    return this.genreRepository
      .createQueryBuilder('genre')
      .where('genre.name ILIKE :pattern', { pattern: `%${search}%` })
      .getMany();
  }

  // Get genres with more than a certain number of songs
  findAll2(_?: any) {
    return this.genreRepository
      .createQueryBuilder('genre')
      .leftJoinAndSelect('genre.songs', 'song')
      .where((qb) => {
        const subQuery = qb
          .subQuery()
          .select()
          .from('genre', 'g')
          .leftJoin('g.songs', 'song')
          .groupBy('g.id')
          .having('COUNT(song.id) > :minSongs', { minSongs: 6 })
          .getQuery();

        return 'genre.id IN ' + subQuery;
      })
      .getMany();
  }

  // Get genres for a specific song
  findAll3(songId: any) {
    return this.genreRepository
      .createQueryBuilder('genre')
      .leftJoin('genre.songs', 'song')
      .where('song.id = :songId', { songId: 1 });
  }

  // Get genres, but skip the first 5
  findAll4() {
    return this.genreRepository
      .createQueryBuilder('genre')
      .offset(5) // se koristi za da skipne odreden broj na raboti (slichno kako skip vo paginacija)
      .limit(2)
      .getMany();
  }

  // Get genres with their songs sorted by song name
  findAll5() {
    return this.genreRepository
      .createQueryBuilder('genre')
      .leftJoinAndSelect('genre.songs', 'song')
      .orderBy('song.name', 'ASC')
      .addOrderBy('genre.name', 'ASC')
      .getMany();
  }
}
