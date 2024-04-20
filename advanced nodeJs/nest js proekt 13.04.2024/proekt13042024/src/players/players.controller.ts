import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayerCreateDTO } from './dtos/player-create.dto';
import { PlayerUpdateDTO } from './dtos/player-update.dto';
import { Player } from './player.entity';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidUnknownValues: true,
  }),
)
@ApiTags('Players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('/')
  @ApiOperation({
    summary: `Retrieves all the players from the database`,
  })
  @ApiOkResponse({
    status: 200,
    description: `All players have been retrieved.`,
    type: [Player],
  })
  getPlayers(): Promise<Player[]> {
    return this.playersService.getPlayers();
  }

  @Get('/:id')
  @ApiOperation({
    summary: `Retrieves a player based on his ID`,
  })
  @ApiOkResponse({
    description: `Retreieved a player based on his ID`,
  })
  getPlayer(@Param('id') id: string): Promise<Player> {
    return this.playersService.getPlayer(id);
  }

  @Post('/')
  @ApiCreatedResponse({
    description: `The player has been created sucessfully`,
    type: Player,
  })
  @ApiOperation({
    summary: `Create a new player`,
  })
  @ApiBody({
    type: PlayerCreateDTO,
  })
  createPlayer(@Body() body: PlayerCreateDTO): Promise<Player> {
    return this.playersService.createPlayer(body);
  }

  @Put('/:id')
  @ApiOperation({
    summary: `Update a player`,
  })
  @ApiResponse({
    status: 200,
    description: `Updated player succesfully`,
    type: Player,
  })
  @ApiBody({
    type: PlayerUpdateDTO,
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: `Player ID`,
  })
  updatePlayer(
    @Param('id') id: string,
    @Body() body: PlayerUpdateDTO,
  ): Promise<Player> {
    return this.playersService.updatePlayer(id, body);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: `Delete a player`,
  })
  @ApiResponse({
    status: 204,
    description: `Player deleted succesfully`,
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Player ID',
  })
  deletePlayer(@Param('id') id: string): Promise<void> {
    return this.playersService.deletePlayer(id);
  }
}
