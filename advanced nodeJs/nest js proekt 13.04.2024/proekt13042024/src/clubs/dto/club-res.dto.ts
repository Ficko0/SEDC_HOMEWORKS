import { ClubCreateDTO } from './club-create.dto';

export class ClubResponseDTO extends ClubCreateDTO {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
