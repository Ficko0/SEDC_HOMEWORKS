import { Song } from 'src/songs/song.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Artist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: String,
  })
  name: string;

  @Column({
    type: Number,
  })
  age: number;

  @Column({
    type: String,
  })
  country: string;

  @OneToMany(() => Song, (songs) => songs.artist)
  songs: Song[];
}
