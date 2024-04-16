import { Controller, Post, Body } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubCreateDTO } from './dto/club-create.dto';
import { ClubResponseDTO } from './dto/club-res.dto';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubService: ClubsService) {}

  @Post()
  createClub(@Body() body: ClubCreateDTO): ClubResponseDTO {
    return this.clubService.createClub(body);
  }
}
