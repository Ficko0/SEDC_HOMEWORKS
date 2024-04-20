import { Artist } from './artitst.entity';
import { Repository } from 'typeorm';
import { ArtistCreateDTO } from './artistDto/artist-create.dto';
import { ArtistUpdateDTO } from './artistDto/artist-update.dto';
export declare class ArtistService {
    private artistRepo;
    constructor(artistRepo: Repository<Artist>);
    getArtists(): Promise<Artist[]>;
    createArist(body: ArtistCreateDTO): Promise<Artist>;
    updateArtist(id: string, body: ArtistUpdateDTO): Promise<Artist>;
    deleteArtist(id: string): Promise<void>;
}
