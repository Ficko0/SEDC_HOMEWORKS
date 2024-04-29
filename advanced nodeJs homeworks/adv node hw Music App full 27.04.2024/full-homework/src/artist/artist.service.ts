import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from './artist.entity';
import { Repository } from 'typeorm';
import { CreateArtistDTO } from './artistDto/create-artist.dto';
import { UpdateArtistDTO } from './artistDto/update-artist.dto';
import { ICurrentUser } from 'src/common/types/currentUser.interface';

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

  async getArtist(id: string): Promise<Artist> {
    return this.artistRepo.findOneByOrFail({ id });
  }

  async createArtist(
    body: CreateArtistDTO,
    user: ICurrentUser,
  ): Promise<Artist> {
    const createdByArtist = {
      ...body,
      createdBy: user.username,
    };

    const newArtist = this.artistRepo.create(createdByArtist);

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
