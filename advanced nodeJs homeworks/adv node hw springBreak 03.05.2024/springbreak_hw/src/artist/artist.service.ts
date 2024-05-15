import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from './artist.entity';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CreateArtistDTO } from './artistDto/create-artist.dto';
import { UpdateArtistDTO } from './artistDto/update-artist.dto';
import { QueryArtistDTO } from './artistDto/query-artist.dto';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(Artist) private artistRepo: Repository<Artist>,
  ) {}

  async getArtists({ name }: QueryArtistDTO): Promise<Artist[]> {
    let query = {} satisfies FindOptionsWhere<Artist>;

    if (name) {
      query = {
        ...query,
        name: ILike(`%${name}%`),
      };
    }

    return this.artistRepo.find({
      where: query,
      relations: {
        songs: true,
        albums: true,
      },
    });
  }

  async getArtist(id: string): Promise<Artist> {
    return this.artistRepo.findOneBy({ id });
  }

  async createArtist(body: CreateArtistDTO): Promise<Artist> {
    const newArtist = this.artistRepo.create(body);

    return this.artistRepo.save(newArtist);
  }

  async updateArtist(id: string, body: UpdateArtistDTO): Promise<Artist> {
    const artist = await this.artistRepo.findOneByOrFail({ id });

    const updatedArtist = this.artistRepo.merge(artist, body);

    return this.artistRepo.save(updatedArtist);
  }

  async deleteArtist(id: string): Promise<void> {
    await this.artistRepo.delete({ id });
  }
}
