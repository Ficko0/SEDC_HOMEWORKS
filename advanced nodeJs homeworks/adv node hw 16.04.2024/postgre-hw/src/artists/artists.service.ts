import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from './artist.entity';
import { Repository } from 'typeorm';
import { ArtistCreateDTO } from './dtos/artist-create.dto';
import { ArtistUpdateDTO } from './dtos/artist-update.dto';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(Artist) private artistRepo: Repository<Artist>,
  ) {}

  async getArtists(): Promise<Artist[]> {
    return this.artistRepo.find({
      relations: {
        songs: true,
      },
    });
  }

  async getArtist(id: string): Promise<Artist> {
    return this.artistRepo.findOneByOrFail({ id });
  }

  async createAritst(body: ArtistCreateDTO): Promise<Artist> {
    const artist = this.artistRepo.create(body);

    return this.artistRepo.save(artist);
  }

  async updateArtist(id: string, body: ArtistUpdateDTO): Promise<Artist> {
    const artist = await this.artistRepo.findOneByOrFail({ id });

    const updatedArtist = this.artistRepo.merge(artist, body);

    return this.artistRepo.save(updatedArtist);
  }

  async deleteArtist(id: string): Promise<void> {
    await this.artistRepo.delete(id);
  }
}
