import { Artist } from './artist.entity';
import { Repository } from 'typeorm';
import { ArtistCreateDTO } from './dtos/artist-create.dto';
import { ArtistUpdateDTO } from './dtos/artist-update.dto';
export declare class ArtistsService {
    private artistRepo;
    constructor(artistRepo: Repository<Artist>);
    getArtists(): Promise<Artist[]>;
    getArtist(id: string): Promise<Artist>;
    createAritst(body: ArtistCreateDTO): Promise<Artist>;
    updateArtist(id: string, body: ArtistUpdateDTO): Promise<Artist>;
    deleteArtist(id: string): Promise<void>;
}
