import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubCreateDTO } from './dto/club-create.dto';
import { Club } from './club.entity';
import { ClubUpdateDTO } from './dto/club-update.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clubs')
@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubService: ClubsService) {}

  @Get('/')
  getClubs(): Promise<Club[]> {
    return this.clubService.getClubs();
  }

  @Post('/')
  createClub(@Body() body: ClubCreateDTO): Promise<Club> {
    return this.clubService.createClub(body);
  }

  @Put('/:id')
  updateClub(
    @Param('id') id: string,
    @Body() body: ClubUpdateDTO,
  ): Promise<Club> {
    return this.clubService.updateClub(id, body);
  }

  @Delete('/:id')
  deleteClub(@Param('id') id: string): Promise<void> {
    return this.clubService.deleteClub(id);
  }
}
