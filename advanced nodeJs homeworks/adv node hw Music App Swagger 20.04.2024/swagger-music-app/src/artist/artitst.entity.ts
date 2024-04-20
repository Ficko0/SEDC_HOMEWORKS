import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    type: String,
    example: '0868b3df-7527-4d9c-8725-21c33d302f07',
  })
  id: string;

  @Column({
    type: String,
  })
  @ApiProperty({
    type: String,
    minLength: 2,
    example: 'Name of the artist',
  })
  name: string;

  @Column({
    type: Number,
  })
  @ApiProperty({
    type: Number,
    minimum: 20,
    example: 20,
  })
  age: number;

  @Column({
    type: String,
  })
  @ApiProperty({
    type: String,
    example: 'Country of the artist',
  })
  country: string;

  @OneToMany(() => Song, (song) => song.artist)
  songs: Song[];

  @CreateDateColumn()
  @ApiProperty({
    type: Date,
    example: '1878-01-01 00:00:00',
  })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({
    type: Date,
    example: '1878-01-01 00:00:00',
  })
  updatedAt: Date;
}
