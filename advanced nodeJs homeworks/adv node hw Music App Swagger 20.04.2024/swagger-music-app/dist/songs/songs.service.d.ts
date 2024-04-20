import { Song } from './song.entity';
import { Repository } from 'typeorm';
import { SongCreateDTO } from './songsDto/song-create.dto';
import { SongUpdateDTO } from './songsDto/song-update.dto';
export declare class SongsService {
    private songRepo;
    constructor(songRepo: Repository<Song>);
    getSongs(): Promise<Song[]>;
    createSong(body: SongCreateDTO): Promise<Song>;
    updateSong(id: string, body: SongUpdateDTO): Promise<Song>;
    deleteSong(id: string): Promise<void>;
}
