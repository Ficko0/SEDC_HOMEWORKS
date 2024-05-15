import { ApiProperty } from '@nestjs/swagger';
import { Album } from 'src/albums/albums.entity';
import { Song } from 'src/songs/song.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Artist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    type: String,
    description: 'The name of the artist',
    example: 'Drake',
  })
  @Column({
    type: String,
  })
  name: string;

  @ApiProperty({
    type: Number,
    description: 'The age of the artist',
    example: 20,
  })
  @Column({
    type: Number,
  })
  age: number;

  @ApiProperty({
    type: String,
    description: 'The country of the artist',
    example: 'Macedonia',
  })
  @Column({
    type: String,
  })
  country: string;

  @OneToMany(() => Song, (songs) => songs.artist)
  songs: Song[];

  @OneToMany(() => Album, (albums) => albums.artist)
  albums: Album[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
