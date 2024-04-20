import { Song } from 'src/songs/song.entity';
export declare class Artist {
    id: string;
    name: string;
    age: number;
    country: string;
    songs: Song[];
    createdAt: Date;
    updatedAt: Date;
}
