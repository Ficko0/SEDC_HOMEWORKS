import { Artist } from 'src/artist/artitst.entity';
import { Genre } from '../common/enums/genre.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity()
export class Song {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    type: String,
    example: 'c293e63f-57e5-4515-bdd5-893611ad8c32',
  })
  id: string;

  @Column({
    type: String,
  })
  @ApiProperty({
    type: String,
    example: 'Name of the song',
  })
  name: string;

  @Column({
    type: Number,
  })
  @ApiProperty({
    type: Number,
    example: 100,
  })
  duration: number;

  @Column({
    enum: Genre,
    enumName: 'genre',
  })
  @ApiProperty({
    enum: Genre,
    example: Genre.HIP_HOP,
  })
  genre: Genre;

  @Column({
    name: 'artist_id',
    nullable: true,
  })
  @ApiPropertyOptional({
    type: String,
    example: '0868b3df-7527-4d9c-8725-21c33d302f07',
  })
  artistId: string | null;

  @ManyToOne(() => Artist, (artist) => artist.songs)
  @JoinColumn({
    name: 'artist_id',
  })
  artist: Artist;

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
