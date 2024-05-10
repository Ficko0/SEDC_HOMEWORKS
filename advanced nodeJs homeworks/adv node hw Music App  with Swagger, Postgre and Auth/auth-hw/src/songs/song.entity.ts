import { Artist } from 'src/artist/artist.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
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
    name: 'artist_id',
    nullable: true,
  })
  artistId?: string | null;

  @ManyToOne(() => Artist, (artist) => artist.songs)
  @JoinColumn({
    name: 'artist_id',
  })
  artist: Artist;

  @CreateDateColumn()
  createdAt: Date;
}
