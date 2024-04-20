import { Artist } from '../artists/artist.entity';
import { Genre } from '../common/enums/songs.enum';
export declare class Song {
    id: string;
    name: string;
    duration: number;
    genre: Genre;
    artist: Artist;
    artistId: string | null;
}
