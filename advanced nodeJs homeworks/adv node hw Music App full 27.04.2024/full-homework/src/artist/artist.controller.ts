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
import { ArtistService } from './artist.service';
import { Artist } from './artist.entity';
import { CreateArtistDTO } from './artistDto/create-artist.dto';
import { UpdateArtistDTO } from './artistDto/update-artist.dto';
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
@ApiTags('Artists')
@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @ApiOperation({ summary: 'Get all the artists' })
  @Roles(Role.ADMIN, Role.MODERATOR, Role.USER)
  @Get('/')
  getArtists(): Promise<Artist[]> {
    return this.artistService.getArtists();
  }

  @ApiOperation({ summary: 'Get a single artist' })
  @Roles(Role.ADMIN, Role.MODERATOR, Role.USER)
  @Get('/:id')
  getArtist(@Param('id') id: string): Promise<Artist> {
    return this.artistService.getArtist(id);
  }

  @ApiOperation({ summary: 'Create an artist' })
  @ApiCreatedResponse({ description: 'Succesfully created!', type: Artist })
  @Roles(Role.ADMIN, Role.MODERATOR)
  @Post('/')
  createArtist(
    @Body() body: CreateArtistDTO,
    @CurrentUser() user: ICurrentUser | undefined,
  ): Promise<Artist> {
    return this.artistService.createArtist(body, user);
  }

  @ApiOperation({ summary: 'Update a single artist' })
  @ApiResponse({ status: 200, description: 'Succesfully updated!' })
  @Roles(Role.ADMIN, Role.MODERATOR)
  @Put('/:id')
  updateArtist(
    @Param('id') id: string,
    @Body() body: UpdateArtistDTO,
  ): Promise<Artist> {
    return this.artistService.updateArtist(id, body);
  }

  @ApiOperation({ summary: 'Delete a single artist' })
  @ApiResponse({ status: 204, description: 'Succesfully deleted!' })
  @Roles(Role.ADMIN, Role.MODERATOR)
  @Delete('/:id')
  deleteArtist(@Param('id') id: string): Promise<void> {
    return this.artistService.deleteArtist(id);
  }
}
