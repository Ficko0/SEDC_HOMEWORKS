import { Artist } from 'src/artist/artist.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Album {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  year: number;

  @ManyToOne(() => Artist, (artist) => artist.albums)
  @JoinColumn({
    name: "artist_id"
  })
  artist: Artist;

  @Column({
    name: "artist_id",
    nullable: true,
  })
  artistId: string | null;
}
