import { Injectable } from '@nestjs/common';

interface Artist {
  id: number;
  name: string;
  age: number;
  country: string;
}

@Injectable()
export class ArtistService {
  private artists: Artist[] = [];

  getArtsits() {
    return this.artists;
  }

  createArtist(artistData: any) {
    const artist = {
      id: this.artists.length + 1,
      ...artistData,
    } satisfies Artist;

    this.artists.push(artist);

    return artist;
  }

  updateArtist(id: number, updateData: any) {
    this.artists = this.artists.map((artist) => {
      if (artist.id === id) {
        return {
          ...artist,
          ...updateData,
        };
      }
      return artist;
    });
  }

  deleteArtist(id: number) {
    this.artists = this.artists.filter((artist) => artist.id !== id);
  }
}
