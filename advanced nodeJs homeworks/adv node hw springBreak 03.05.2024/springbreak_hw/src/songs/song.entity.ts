import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Album } from 'src/albums/albums.entity';
import { Artist } from 'src/artist/artist.entity';
import { Genre } from 'src/common/enums/genre.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    type: String,
    description: 'The name of the song',
    example: 'Calling For You',
  })
  @Column({
    type: String,
  })
  name: string;

  @ApiProperty({
    type: Number,
    description: 'The duration of the song in seconds',
    example: 200,
  })
  @Column({
    type: Number,
  })
  duration: number;

  @ApiProperty({
    enum: Genre,
    description: 'The genre of the song',
    example: Genre.FUNK,
  })
  @Column({
    enum: Genre,
    enumName: 'genre',
  })
  genre: Genre;

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

  @ManyToOne(() => Artist, (artist) => artist.songs)
  @JoinColumn({
    name: 'artist_id',
  })
  artist: Artist;

  @ManyToOne(() => Album, (album) => album.songs)
  @JoinColumn({
    name: 'album_id',
  })
  album: Album;

  @ApiPropertyOptional({
    type: String,
    description: 'The ID of the album',
    example: '0e601898-0172-4372-8aef-ce62af73735f',
  })
  @Column({
    name: 'album_id',
    nullable: true,
  })
  albumId: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
