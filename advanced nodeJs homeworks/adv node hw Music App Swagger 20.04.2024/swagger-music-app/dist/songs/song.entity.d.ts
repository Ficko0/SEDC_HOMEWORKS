import { Artist } from 'src/artist/artitst.entity';
import { Genre } from '../common/enums/genre.enum';
export declare class Song {
    id: string;
    name: string;
    duration: number;
    genre: Genre;
    artistId: string | null;
    artist: Artist;
    createdAt: Date;
    updatedAt: Date;
}
