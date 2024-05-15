import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './albums.entity';
import { FindOptionsWhere, ILike, Like, Repository } from 'typeorm';
import { CreateAlbumDTO } from './albumsDto/create-album.dto';
import { UpdateAlbumDTO } from './albumsDto/update-album.dto';
import { QueryAlbumsDTO } from './albumsDto/query-album.dto';

@Injectable()
export class AlbumsService {
  constructor(@InjectRepository(Album) private albumRepo: Repository<Album>) {}

  async getAlbums({
    name,
    released,
    artistId,
  }: QueryAlbumsDTO): Promise<Album[]> {
    let query = {} satisfies FindOptionsWhere<Album>;

    if (name) {
      query = {
        ...query,
        name: ILike(`%${name}`),
      };
    }

    if (released) {
      query = {
        ...query,
        released,
      };
    }

    if (artistId) {
      query = {
        ...query,
        artistId,
      };
    }

    return this.albumRepo.find({
      where: query,
      order: {
        released: 'ASC',
      },
      relations: {
        artist: true,
        songs: true,
      },
    });
  }

  async getAlbum(id: string): Promise<Album> {
    return this.albumRepo.findOneBy({ id });
  }

  async createAlbum(body: CreateAlbumDTO): Promise<Album> {
    const newAlbum = this.albumRepo.create(body);

    return this.albumRepo.save(newAlbum);
  }

  async updateAlbum(id: string, body: UpdateAlbumDTO): Promise<Album> {
    const album = await this.albumRepo.findOneBy({ id });

    const updatedAlbum = this.albumRepo.merge(album, body);

    return this.albumRepo.save(updatedAlbum);
  }

  async deleteAlbum(id: string): Promise<void> {
    await this.albumRepo.delete({ id });
  }
}
