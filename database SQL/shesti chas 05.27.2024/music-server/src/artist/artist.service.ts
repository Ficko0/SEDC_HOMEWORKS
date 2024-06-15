import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artist } from './artist.entity';
import { ArtistsQueryDto } from './dto/artist-query.dto';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(Artist)
    private artistRepository: Repository<Artist>,
  ) {}

  findAll({ skip, take, search, country }: ArtistsQueryDto) {
    const query = this.artistRepository.createQueryBuilder('artist')
      .leftJoinAndSelect('artist.artistDetails', 'artist_details');

    if (search) {
      query.andWhere('artist.name ILIKE :name', { name: `%${search}%` });
    }

    if (country) {
      query.andWhere('artist_details.country = :country', { country });
    }

    return query.getMany();
  }

  findAll2(_?: any) {
    return this.artistRepository
      .createQueryBuilder('artist')
      .leftJoin('artist.songs', 'song')
      .groupBy('artist.id')
      .orderBy('COUNT(song.id)', 'DESC')
      .select('artist.id')
      .addSelect('artist.name')
      .addSelect('COUNT(song.id)')
      .getMany();
  }

  // Get artists with their id, name and the number of songs they have
  findAll3() {
    return this.artistRepository
      .createQueryBuilder('artist')
      .leftJoin('artist.songs', 'song')
      .select('artist.id', 'id')
      .addSelect('artist.name', 'name')
      .addSelect('COUNT(song.id)', 'songCount')
      .groupBy('artist.id')
      .having('COUNT(song.id) > :minSongs', { minSongs: 4 })
      .getRawMany<{ id: number; name: string; songCount: number }>();
  }
}
