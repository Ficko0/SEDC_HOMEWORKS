import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayerCreateDTO } from './dtos/player-create.dto';
import { PlayerResponseDTO } from './dtos/player-res.dto';
import { PlayerUpdateDTO } from './dtos/player-update.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './player.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayersService {
  players: PlayerResponseDTO[] = [];

  constructor(
    @InjectRepository(Player) private playerRepository: Repository<Player>,
  ) {}

  async getPlayers(): Promise<Player[]> {
    return this.playerRepository.find();
    // let filteredPlayers = [...this.players];
    // if (query.position) {
    //   filteredPlayers = filteredPlayers.filter(
    //     (player) => player.position === position,
    //   );
    // }
    // if (query.country) {
    //   filteredPlayers = filteredPlayers.filter(
    //     (player) => player.country === country,
    //   );
    // }
    // return filteredPlayers;
  }

  async getPlayer(id: string): Promise<Player> {
    return this.playerRepository.findOneByOrFail({ id });
  }

  async createPlayer(body: PlayerCreateDTO): Promise<Player> {
    const newPlayer = this.playerRepository.create(body);

    return this.playerRepository.save(newPlayer);
  }

  async updatePlayer(id: string, body: PlayerUpdateDTO): Promise<Player> {
    const player = await this.playerRepository.findOneByOrFail({ id });

    const updatedPlayer = this.playerRepository.merge(player, body);

    return this.playerRepository.save(updatedPlayer);
    // const index = this.players.findIndex((player) => player.id === id);

    // if (index < 0) {
    //   throw new NotFoundException(`Player with ID: ${id} doesn't exist.`);
    // }

    // this.players[index] = {
    //   ...this.players[index],
    //   ...body,
    //   updatedAt: new Date(),
    // };

    // return this.players[index];
  }

  async deletePlayer(id: string): Promise<void> {
    await this.playerRepository.delete(id)
    // this.players = this.players.filter((player) => player.id !== id);
  }
}
