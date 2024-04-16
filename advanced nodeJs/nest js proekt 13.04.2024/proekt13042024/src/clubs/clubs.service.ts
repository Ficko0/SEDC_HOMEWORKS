import { Injectable } from '@nestjs/common';
import { ClubCreateDTO } from './dto/club-create.dto';
import { ClubResponseDTO } from './dto/club-res.dto';

@Injectable()
export class ClubsService {
  clubs: ClubResponseDTO[] = [];

  createClub(body: ClubCreateDTO): ClubResponseDTO {
    const club = {
      ...body,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } satisfies ClubResponseDTO;

    this.clubs.push(club);

    return club;
  }
}
