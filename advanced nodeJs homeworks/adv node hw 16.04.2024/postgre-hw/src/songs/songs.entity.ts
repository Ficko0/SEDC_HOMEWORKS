import { Artist } from '../artists/artist.entity';
import { Genre } from '../common/enums/songs.enum';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  duration: number;

  @Column({
    enum: Genre,
    enumName: 'genre',
  })
  genre: Genre;

  @ManyToOne(() => Artist, (artist) => artist.songs)
  @JoinColumn({
    name: 'artist_id',
  })
  artist: Artist;

  @Column({
    nullable: true,
    name: 'artist_id',
  })
  artistId: string | null;
}
