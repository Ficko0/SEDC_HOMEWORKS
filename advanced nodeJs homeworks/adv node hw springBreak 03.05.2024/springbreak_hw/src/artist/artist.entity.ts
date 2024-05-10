import { Album } from 'src/albums/album.entity';
import { Song } from 'src/songs/song.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';

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

  @OneToMany(() => Album, (album) => album.artist)
  albums: Album[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
