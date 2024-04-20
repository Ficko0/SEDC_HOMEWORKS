import { SongsService } from './songs.service';
import { Song } from './songs.entity';
import { SongCreateDTO } from './dtos/song-create.dto';
import { SongUpdateDTO } from './dtos/song-update.dto';
export declare class SongsController {
    private readonly songService;
    constructor(songService: SongsService);
    getSongs(): Promise<Song[]>;
    getSong(creatorId: string): Promise<Song>;
    createSong(body: SongCreateDTO): Promise<Song>;
    updateSong(id: string, body: SongUpdateDTO): Promise<Song>;
    deleteSong(id: string): Promise<void>;
}
