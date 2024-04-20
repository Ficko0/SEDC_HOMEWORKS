import { Club } from 'src/clubs/club.entity';
import { Position } from './../common/enums/position.enum';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    type: String,
    description: `The ID of the player`,
    example: `66a26a8f-ac75-416a-b19c-12f7a2d90abd`,
  })
  id: string;

  @Column({
    type: String,
    default: 'N/A',
  })
  @ApiProperty({
    type: String,
    description: `Name of the player`,
    example: `John Doe`,
  })
  name: string;

  @Column()
  @ApiProperty({
    type: Number,
    description: `Age of the player`,
    example: 20,
  })
  age: number;

  @Column({
    enum: Position,
    enumName: 'position',
  })
  @ApiProperty({
    description: `Player position`,
    example: Position.MD,
    enum: Position,
  })
  position: Position;

  @Column()
  @ApiProperty({
    type: String,
    description: `Country of the player`,
    example: `Macedonia`,
  })
  country: string;

  @Column({
    default: 0,
  })
  @ApiPropertyOptional({
    type: Number,
    description: `Goals of the player`,
    minimum: 0,
    example: 3,
    default: 0,
  })
  goals: number;

  @Column({
    default: 0,
  })
  @ApiProperty({
    type: Number,
    description: `Assists of the player`,
    minimum: 0,
    example: 3,
    default: 0,
  })
  assists: number;

  @Column({
    default: 0,
  })
  @ApiProperty({
    type: Number,
    description: `Saves of the player`,
    minimum: 0,
    example: 3,
    default: 0,
  })
  saves: number;

  @Column({
    default: 0,
    name: 'matches_played',
  })
  @ApiProperty({
    type: Number,
    description: `Number of matches played of the player`,
    minimum: 0,
    example: 3,
    default: 0,
  })
  matchesPlayed: number;

  @ManyToOne(() => Club, (club) => club.players)
  @JoinColumn({
    name: 'club_id',
  })
  @ApiProperty({
    description: `Club of the player`,
    type: Club,
  })
  club: Club;

  @Column({
    nullable: true,
    name: 'club_id',
  })
  @ApiProperty({
    type: String,
    nullable: true,
    description: `ID of the club the player plays in`,
  })
  clubId: string | null;
}
