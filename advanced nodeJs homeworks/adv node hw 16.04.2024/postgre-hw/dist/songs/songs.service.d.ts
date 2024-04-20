import { Song } from './songs.entity';
import { Repository } from 'typeorm';
import { SongCreateDTO } from './dtos/song-create.dto';
import { SongUpdateDTO } from './dtos/song-update.dto';
export declare class SongsService {
    private songRepo;
    constructor(songRepo: Repository<Song>);
    getSongs(): Promise<Song[]>;
    getSongByUserID(id: string): Promise<Song>;
    createSong(body: SongCreateDTO): Promise<Song>;
    updateSong(id: string, body: SongUpdateDTO): Promise<Song>;
    deleteSong(id: string): Promise<void>;
}
