import { ArtistsService } from './artists.service';
import { Artist } from './artist.entity';
import { ArtistCreateDTO } from './dtos/artist-create.dto';
import { ArtistUpdateDTO } from './dtos/artist-update.dto';
export declare class ArtistsController {
    private readonly artistService;
    constructor(artistService: ArtistsService);
    getArtists(): Promise<Artist[]>;
    getArtist(id: string): Promise<Artist>;
    createArtist(body: ArtistCreateDTO): Promise<Artist>;
    updateArtist(id: string, body: ArtistUpdateDTO): Promise<Artist>;
    deleteArtist(id: string): Promise<void>;
}
