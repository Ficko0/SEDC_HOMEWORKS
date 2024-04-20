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
    return this.playerRepository.find({
      relations: ['club'],
    });
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
  }

  async deletePlayer(id: string): Promise<void> {
    await this.playerRepository.delete(id);
  }
}
