import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Artist } from 'src/artist/artist.entity';
import { Genre } from 'src/common/enums/genre.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
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
  @ApiProperty({
    type: String,
    description: 'Name of the song',
    example: 'Break ya neck',
  })
  name: string;

  @Column({
    type: Number,
  })
  @ApiProperty({
    type: Number,
    description: 'Duration of the song in seconds',
    example: 200,
  })
  duration: number;

  @Column({
    enum: Genre,
    enumName: 'genre',
  })
  @ApiProperty({
    type: Genre,
    description: 'Genre of the song',
    example: Genre.HIP_HOP,
  })
  genre: Genre;

  @Column({
    nullable: true,
    name: 'artistId',
  })
  artistId: string | null;

  @ManyToOne(() => Artist, (artist) => artist.songs)
  @JoinColumn({
    name: 'artistId',
  })
  artist: Artist;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
