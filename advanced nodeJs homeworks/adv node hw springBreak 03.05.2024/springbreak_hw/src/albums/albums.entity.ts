import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Artist } from 'src/artist/artist.entity';
import { Song } from 'src/songs/song.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Album {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    type: String,
    description: 'The name of the album',
    example: 'For All The Dogs',
  })
  @Column({
    type: String,
  })
  name: string;

  @ApiProperty({
    type: Number,
    description: 'The release year of the album',
    example: 2023,
  })
  @Column({
    type: Number,
  })
  released: number;

  @ManyToOne(() => Artist, (artist) => artist.albums)
  @JoinColumn({
    name: 'artist_id',
  })
  artist: Artist;

  @OneToMany(() => Song, (songs) => songs.album)
  songs: Song[];

  @ApiPropertyOptional({
    type: String,
    description: 'The ID of the artist',
    example: '0e601898-0172-4372-8aef-ce62af73735f',
  })
  @Column({
    name: 'artist_id',
    nullable: true,
  })
  artistId: string | null;
}
