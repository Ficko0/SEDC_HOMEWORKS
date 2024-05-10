import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { Repository } from 'typeorm';
import { CreateAlbumDTO } from './albumDto/create-album.dto';
import { UpdateAlbumDTO } from './albumDto/update-album.dto';

@Injectable()
export class AlbumsService {
  constructor(@InjectRepository(Album) private albumRepo: Repository<Album>) {}

  async getAlbums(): Promise<Album[]> {
    return this.albumRepo.find({
      relations: {
        artist: true,
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
    const album = await this.albumRepo.findOneByOrFail({ id });

    const updatedAlbum = this.albumRepo.merge(album, body);

    return this.albumRepo.save(updatedAlbum);
  }

  async deleteAlbum(id: string): Promise<void> {
    await this.albumRepo.delete({ id });
  }
}
