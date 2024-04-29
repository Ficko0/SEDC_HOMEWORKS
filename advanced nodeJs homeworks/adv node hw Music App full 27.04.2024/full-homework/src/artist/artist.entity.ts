import { ApiProperty } from '@nestjs/swagger';
import { Song } from 'src/songs/song.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Artist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: String,
  })
  @ApiProperty({
    type: String,
    description: 'Name of the artist',
    example: 'John',
  })
  name: string;

  @Column({
    type: Number,
  })
  @ApiProperty({
    type: Number,
    description: 'Age of the artist',
    example: 20,
  })
  age: number;

  @Column({
    type: String,
  })
  @ApiProperty({
    type: String,
    description: 'Country of the artist',
    example: 'United Kingdom',
  })
  country: string;

  @OneToMany(() => Song, (songs) => songs.artist)
  songs: Song[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
