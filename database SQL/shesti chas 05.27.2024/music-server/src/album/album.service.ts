import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Album } from './album.entity';
import { AlbumsQueryDto } from './dto/album-query.dto';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  // 1. First way of querying

  // async findAll(albumsQueryDTO: AlbumsQueryDto) {
  //   const query = this.albumRepository.createQueryBuilder('album');

  //   if (albumsQueryDTO.search) {
  //     query.where('album.name ILIKE :searchTerm ', { searchTerm: `%${albumsQueryDTO.search}%` })
  //   }

  //   query.skip(albumsQueryDTO.skip).take(albumsQueryDTO.take)

  //   const [albums, count] = await query.getManyAndCount();

  //   return {
  //     payload: albums,
  //     total: count,
  //   };
  // }

  // 2. Second way of querying

  // findAll(query?: any) {
  //   return this.albumRepository.createQueryBuilder('album')
  //   .leftJoinAndSelect('album.songs', 'song')
  //   .leftJoinAndSelect('song.artist', 'artist')
  //   .leftJoinAndSelect('artist.artist_details', 'artist_details')
  //   .getMany();
  // }

  // 3. Third way of querying

  // findAll(query?: any) {
  //   return this.albumRepository.createQueryBuilder('album').getCount();
  // }

  // 4. Creating a union in TypeScript

  // findAll(query?: any) {
  //   const albumsWithSongs = this.albumRepository.createQueryBuilder('album')
  //     .leftJoinAndSelect('album.songs', 'song')
  //     .select('album.id')
  //     .getQuery();
    
  //   const albumsWithPlaylists = this.albumRepository.createQueryBuilder('album')
  //     .leftJoin('album.songs', 'song')
  //     .leftJoin('song.playlist', 'playlist')
  //     .select('album.id')
  //     .getQuery();

  //   return this.albumRepository.createQueryBuilder('album')
  //     .where(`album.id IN (${albumsWithSongs})`)
  //     .orWhere(`album.id IN (${albumsWithPlaylists})`)
  //     .getMany();
  // }

  // 5. GROUP BY in TypeScript

  // findAll(query?: any) {
  //   return this.albumRepository.createQueryBuilder('album')
  //     .leftJoinAndSelect('album.songs', 'song')
  //     .groupBy('album.id')
  //     .having(`COUNT(song.id) > :minSongs`, { minSongs: 3 })
  //     .select('albumId, COUNT(song.id)')
  //     .getMany();
  // }

  // 6. Filtering

  // findAll(query?: any) {
  //   return this.albumRepository.createQueryBuilder('album')
  //     .limit(5)
  //     .getMany();
  // }

  // findAll(query?: any) {
  //   return this.albumRepository.createQueryBuilder('album')
  //     .orderBy('album.rating', 'DESC')
  //     .limit(5)
  //     .getMany();
  // }

  // findAll(query?: any) {
  //   return this.albumRepository.createQueryBuilder('album')
  //     .select('album.name')
  //     .distinct(true)
  //     .getMany();
  // }

  // 7. SQL code in NestJS

  findAll(_?: any) {
    const query = `
      SELECT a.name AS album_name, ar.name AS artist_name, s.name AS song_name 
      FROM album a
      LEFT JOIN
      song s ON s.album_id = a.id
      LEFT JOIN
      artist ar ON ar.id = s.artist_id
      LEFT JOIN
      artist_details ad ON ad.artist_id = ar.id
    `;

    return this.entityManager.query(query);
  }
  
}
