import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from './song.entity';
import { CreateSongDTO } from './songsDto/create-song.dto';
import { UpdateSongDTO } from './songsDto/update-song.dto';
import { QuerySongsDTO } from './songsDto/query-song.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/enums/role.enum';
import { JWTGuard } from 'src/common/gurads/jwt.guard';
import { RolesGuard } from 'src/common/gurads/role.guard';

@ApiBearerAuth()
@ApiTags('Songs')
@UseGuards(JWTGuard, RolesGuard)
@Controller('songs')
export class SongsController {
  constructor(private readonly songService: SongsService) {}

  @ApiOperation({ summary: 'Retrieve all the songs' })
  @ApiResponse({
    status: 200,
    description: 'Retrieved all the songs succesfully',
  })
  @Roles(Role.ADMIN, Role.MODERATOR, Role.USER)
  @Get('/')
  getSongs(@Query() query: QuerySongsDTO): Promise<Song[]> {
    return this.songService.getSongs(query);
  }

  @ApiOperation({ summary: 'Retrieve a song by ID' })
  @ApiResponse({ status: 200, description: 'Retrieved a song succesfully' })
  @Roles(Role.ADMIN, Role.MODERATOR, Role.USER)
  @Get('/:id')
  getSong(@Param('id') id: string): Promise<Song> {
    return this.songService.getSong(id);
  }

  @ApiOperation({ summary: 'Create a song' })
  @ApiCreatedResponse({ description: 'Created a song succesfully' })
  @Roles(Role.ADMIN)
  @Post('/')
  createSong(@Body() body: CreateSongDTO): Promise<Song> {
    return this.songService.createSong(body);
  }

  @ApiOperation({ summary: 'Update a song' })
  @ApiResponse({ status: 200, description: 'Updated a song succesfully' })
  @Roles(Role.ADMIN, Role.MODERATOR)
  @Put('/:id')
  updateSong(
    @Param('id') id: string,
    @Body() body: UpdateSongDTO,
  ): Promise<Song> {
    return this.songService.updateSong(id, body);
  }

  @ApiOperation({ summary: 'Delete a song' })
  @ApiResponse({ status: 204, description: 'Deleted a song succesfully' })
  @Roles(Role.ADMIN, Role.MODERATOR)
  @Delete('/:id')
  deleteSong(@Param('id') id: string): Promise<void> {
    return this.songService.deleteSong(id);
  }
}
