import { SongsService } from './songs.service';
import { Song } from './song.entity';
import { SongCreateDTO } from './songsDto/song-create.dto';
import { SongUpdateDTO } from './songsDto/song-update.dto';
export declare class SongsController {
    private readonly songService;
    constructor(songService: SongsService);
    getSongs(): Promise<Song[]>;
    createSong(body: SongCreateDTO): Promise<Song>;
    updateSong(id: string, body: SongUpdateDTO): Promise<Song>;
    deleteSong(id: string): Promise<void>;
}
