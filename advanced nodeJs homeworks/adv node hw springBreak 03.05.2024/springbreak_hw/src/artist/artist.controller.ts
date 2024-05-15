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
import { ArtistService } from './artist.service';
import { Artist } from './artist.entity';
import { CreateArtistDTO } from './artistDto/create-artist.dto';
import { UpdateArtistDTO } from './artistDto/update-artist.dto';
import { QueryArtistDTO } from './artistDto/query-artist.dto';
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
@ApiTags('Artist')
@UseGuards(JWTGuard, RolesGuard)
@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @ApiOperation({ summary: 'Retrieve all the artists' })
  @ApiResponse({
    status: 200,
    description: 'Retrieved all the artists succesfully',
  })
  @Roles(Role.ADMIN, Role.MODERATOR, Role.USER)
  @Get('/')
  getArtists(@Query() query: QueryArtistDTO): Promise<Artist[]> {
    return this.artistService.getArtists(query);
  }

  @ApiOperation({ summary: 'Retrieve an artist by his ID' })
  @ApiResponse({ status: 200, description: 'Retrieved the artist succesfully' })
  @Roles(Role.ADMIN, Role.MODERATOR, Role.USER)
  @Get('/:id')
  getArtist(@Param('id') id: string): Promise<Artist> {
    return this.artistService.getArtist(id);
  }

  @ApiOperation({ summary: 'Create an artist' })
  @ApiCreatedResponse({ description: 'Created the artist succesfully' })
  @Roles(Role.ADMIN)
  @Post('/')
  createArtist(@Body() body: CreateArtistDTO): Promise<Artist> {
    return this.artistService.createArtist(body);
  }

  @ApiOperation({ summary: 'Update an artist' })
  @ApiResponse({ status: 200, description: 'Updated artist succesfully' })
  @Roles(Role.ADMIN, Role.MODERATOR)
  @Put('/:id')
  updateArtist(
    @Param('id') id: string,
    @Body() body: UpdateArtistDTO,
  ): Promise<Artist> {
    return this.artistService.updateArtist(id, body);
  }

  @ApiOperation({ summary: 'Delete an artist' })
  @ApiResponse({ status: 204, description: 'Artist deleted succesfully' })
  @Roles(Role.ADMIN, Role.MODERATOR)
  @Delete('/:id')
  deleteArtist(@Param('id') id: string): Promise<void> {
    return this.artistService.deleteArtist(id);
  }
}
