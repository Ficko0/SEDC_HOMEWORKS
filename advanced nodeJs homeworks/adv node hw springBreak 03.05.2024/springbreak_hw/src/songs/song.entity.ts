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

  @Column({
    type: String,
  })
  name: string;

  @Column({
    type: Number,
  })
  duration: number;

  @Column({
    enum: Genre,
    enumName: 'genre',
  })
  genre: Genre;

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
