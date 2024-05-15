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
import { AlbumsService } from './albums.service';
import { Album } from './albums.entity';
import { CreateAlbumDTO } from './albumsDto/create-album.dto';
import { UpdateAlbumDTO } from './albumsDto/update-album.dto';
import { QueryAlbumsDTO } from './albumsDto/query-album.dto';
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
@ApiTags('Albums')
@UseGuards(JWTGuard, RolesGuard)
@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumService: AlbumsService) {}

  @ApiOperation({ summary: 'Retrieve all the albums' })
  @ApiResponse({
    status: 200,
    description: 'Retrieved all the albums succesfully',
  })
  @Roles(Role.ADMIN, Role.MODERATOR, Role.USER)
  @Get('/')
  getAlbums(@Query() query: QueryAlbumsDTO): Promise<Album[]> {
    return this.albumService.getAlbums(query);
  }

  @ApiOperation({ summary: 'Retrieve an album by ID' })
  @ApiResponse({ status: 200, description: 'Retrieved the album succsefully' })
  @Roles(Role.ADMIN, Role.MODERATOR, Role.USER)
  @Get('/:id')
  getAlbum(@Param('id') id: string): Promise<Album> {
    return this.albumService.getAlbum(id);
  }

  @ApiOperation({ summary: 'Create an album' })
  @ApiCreatedResponse({ description: 'Created an album succesfully' })
  @Roles(Role.ADMIN)
  @Post('/')
  createPost(@Body() body: CreateAlbumDTO): Promise<Album> {
    return this.albumService.createAlbum(body);
  }

  @ApiOperation({ summary: 'Update an album' })
  @ApiResponse({ status: 200, description: 'Updated album succesfully' })
  @Roles(Role.ADMIN, Role.MODERATOR)
  @Put('/:id')
  updateAlbum(
    @Param('id') id: string,
    @Body() body: UpdateAlbumDTO,
  ): Promise<Album> {
    return this.albumService.updateAlbum(id, body);
  }

  @ApiOperation({ summary: 'Delete an album' })
  @ApiResponse({ status: 204, description: 'Deleted succesfully' })
  @Roles(Role.ADMIN, Role.MODERATOR)
  @Delete('/:id')
  deleteAlbum(@Param('id') id: string): Promise<void> {
    return this.albumService.deleteAlbum(id);
  }
}
