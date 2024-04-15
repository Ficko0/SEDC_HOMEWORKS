import { Injectable, NotFoundException } from '@nestjs/common';

interface Song {
  id: number;
  name: string;
  duration: number;
  genre: string;
  creator: number;
}

@Injectable()
export class SongService {
  private songs: Song[] = [];

  getSongs() {
    if (this.songs.length === 0) {
      throw new NotFoundException(`No registered songs`);
    } else {
      return this.songs;
    }
  }

  getSongsByID(id: number) {
    return this.songs.filter((song) => song.id === id);
  }

  getSongByUserID(userId: number) {
    return this.songs.filter((song) => song.creator === userId);
  }

  createSong(songData: any) {
    const song = {
      id: this.songs.length + 1,
      ...songData,
    } satisfies Song;

    this.songs.push(song);

    return song;
  }

  updateSong(id: number, updateData: any) {
    this.songs = this.songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          ...updateData,
        };
      }
      return song;
    });
  }

  deleteSong(id: number) {
    this.songs = this.songs.filter((song) => song.id !== id);
  }
}
