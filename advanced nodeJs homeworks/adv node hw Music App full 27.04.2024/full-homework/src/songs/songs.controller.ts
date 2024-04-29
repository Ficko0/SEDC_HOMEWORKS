import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from './song.entity';
import { CreateSongDTO } from './songsDto/create-song.dto';
import { UpdateSongDTO } from './songsDto/update-song.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/enums/roles.enum';
import { CurrentUser } from 'src/common/decorators/currentUser.decorator';
import { ICurrentUser } from 'src/common/types/currentUser.interface';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { RoleGuard } from 'src/common/guards/role.guard';

@ApiBearerAuth()
@UseGuards(JwtGuard, RoleGuard)
@UsePipes(
  new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidUnknownValues: true,
  }),
)
@ApiTags('Songs')
@Controller('songs')
export class SongsController {
  constructor(private readonly songService: SongsService) {}

  @ApiOperation({ summary: 'Get all songs' })
  @ApiResponse({ description: 'Songs retrieved succesfully' })
  @Roles(Role.ADMIN, Role.USER)
  @Get('/')
  getSongs(): Promise<Song[]> {
    return this.songService.getSongs();
  }

  @ApiOperation({ summary: 'Get a single song' })
  @ApiResponse({ description: 'Song retrieved succesfully' })
  @Roles(Role.ADMIN, Role.USER, Role.MODERATOR)
  @Get('/:id')
  getSong(@Param('id') id: string): Promise<Song> {
    return this.songService.getSong(id);
  }

  @ApiOperation({ summary: 'Create a song' })
  @ApiCreatedResponse({ description: 'Song created succesfully' })
  @Roles(Role.ADMIN, Role.MODERATOR)
  @Post('/')
  createSong(
    @Body() body: CreateSongDTO,
    @CurrentUser() user: ICurrentUser | undefined,
  ): Promise<Song> {
    return this.songService.createSong(body, user);
  }

  @ApiOperation({ summary: 'Update a song' })
  @ApiResponse({ description: 'Song updated succesfully', status: 200 })
  @Roles(Role.ADMIN, Role.MODERATOR)
  @Put('/:id')
  updateSong(
    @Param('id') id: string,
    @Body() body: UpdateSongDTO,
  ): Promise<Song> {
    return this.songService.updateSong(id, body);
  }

  @ApiOperation({ summary: 'Delete a song' })
  @ApiResponse({ description: 'Song deleted succesfully', status: 204 })
  @Roles(Role.ADMIN, Role.MODERATOR)
  @Delete('/:id')
  deletSong(@Param('id') id: string): Promise<void> {
    return this.songService.deleteSong(id);
  }
}
