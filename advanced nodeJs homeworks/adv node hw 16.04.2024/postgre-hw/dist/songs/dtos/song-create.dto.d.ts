import { Genre } from '../../common/enums/songs.enum';
export declare class SongCreateDTO {
    name: string;
    duration: number;
    genre: Genre;
    artistId?: string;
}
