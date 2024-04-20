import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from './artitst.entity';
import { Repository } from 'typeorm';
import { ArtistCreateDTO } from './artistDto/artist-create.dto';
import { ArtistUpdateDTO } from './artistDto/artist-update.dto';

@Injectable()
export class ArtistService {
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

  async createArist(body: ArtistCreateDTO): Promise<Artist> {
    const newArtist = this.artistRepo.create(body);

    return this.artistRepo.save(newArtist);
  }

  async updateArtist(id: string, body: ArtistUpdateDTO): Promise<Artist> {
    const artist = await this.artistRepo.findOneByOrFail({ id });

    const updatedArtist = this.artistRepo.merge(artist, body);

    return this.artistRepo.save(updatedArtist);
  }

  async deleteArtist(id: string): Promise<void> {
    await this.artistRepo.delete({ id });
  }
}
