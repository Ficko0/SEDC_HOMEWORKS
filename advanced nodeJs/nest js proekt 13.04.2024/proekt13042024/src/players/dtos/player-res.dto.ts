import { PlayerCreateDTO } from './player-create.dto';

export class PlayerResponseDTO extends PlayerCreateDTO {
  // has all properties from the class

  id: string;
  createdAt: Date;
  updatedAt: Date;
}
