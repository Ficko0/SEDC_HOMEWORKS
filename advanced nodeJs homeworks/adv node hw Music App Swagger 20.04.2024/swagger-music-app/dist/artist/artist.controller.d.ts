import { ArtistService } from './artist.service';
import { Artist } from './artitst.entity';
import { ArtistCreateDTO } from './artistDto/artist-create.dto';
import { ArtistUpdateDTO } from './artistDto/artist-update.dto';
export declare class ArtistController {
    private readonly artistService;
    constructor(artistService: ArtistService);
    getArtists(): Promise<Artist[]>;
    createArtist(body: ArtistCreateDTO): Promise<Artist>;
    updateArtist(id: string, body: ArtistUpdateDTO): Promise<Artist>;
    deleteArtist(id: string): Promise<void>;
}
