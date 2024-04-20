import { Injectable, Body } from '@nestjs/common';
import { ClubCreateDTO } from './dto/club-create.dto';
import { ClubResponseDTO } from './dto/club-res.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Club } from './club.entity';
import { ClubUpdateDTO } from './dto/club-update.dto';

@Injectable()
export class ClubsService {
  constructor(@InjectRepository(Club) private clubRepo: Repository<Club>) {}

  async getClubs(): Promise<Club[]> {
    return this.clubRepo.find({
      relations: ['players']
    });
  }

  async createClub(body: ClubCreateDTO): Promise<Club> {
    const newClub = this.clubRepo.create(body);

    return this.clubRepo.save(newClub);
  }

  async updateClub(id: string, body: ClubUpdateDTO): Promise<Club> {
    const club = await this.clubRepo.findOneByOrFail({ id });

    const updatedClub = this.clubRepo.merge(club, body);

    return this.clubRepo.save(updatedClub);
  }

  async deleteClub(id: string): Promise<void> {
    await this.clubRepo.delete({ id }); // this deletes the entire thing from the DB

    // or

    // await this.clubRepo.softDelete(id); => this deletes the information for the user, but the database still has the object
  }
}
