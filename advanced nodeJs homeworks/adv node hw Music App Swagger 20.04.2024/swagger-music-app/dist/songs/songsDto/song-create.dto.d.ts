import { Genre } from 'src/common/enums/genre.enum';
export declare class SongCreateDTO {
    name: string;
    duration: number;
    genre: Genre;
    artistId?: string;
}
