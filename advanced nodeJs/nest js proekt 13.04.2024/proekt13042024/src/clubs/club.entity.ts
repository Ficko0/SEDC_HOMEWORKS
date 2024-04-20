import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Player } from 'src/players/player.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Club {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    type: String,
    example: `ID`,
  })
  id: string;

  @Column()
  @ApiProperty({
    type: String,
    example: 'FK-Vardar',
  })
  name: string;

  @Column({
    length: 30,
  })
  @ApiProperty({
    type: String,
    maxLength: 30,
    example: `Macedonia, Skopje`,
  })
  location: string;

  @Column()
  @ApiProperty({
    type: String,
    example: `Filip II`,
  })
  stadium: string;

  @Column()
  @ApiProperty({
    type: String,
    example: 'Bundesleague',
  })
  league: string;

  @Column({
    default: 0,
  })
  @ApiProperty({
    type: Number,
    example: 2,
    default: 0,
  })
  wins: number;

  @Column({
    default: 0,
  })
  @ApiProperty({
    type: Number,
    example: 2,
    default: 0,
  })
  losses: number;

  @Column({
    default: 0,
  })
  @ApiProperty({
    type: Number,
    example: 2,
    default: 0,
  })
  draws: number;

  @OneToMany(() => Player, (player) => player.club)
  @ApiPropertyOptional({
    type: [Player],
  })
  players: Player[];

  @Column({
    name: 'founded_at',
  })
  @ApiProperty({
    type: Date,
    example: `2024-01-01 00:00:00`,
  })
  foundedAt: Date;

  @CreateDateColumn({
    name: 'created_at',
  })
  @ApiProperty({
    type: Date,
    example: `2024-01-01 00:00:00`,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  @ApiProperty({
    type: Date,
    example: `2024-01-01 00:00:00`,
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
  })
  @ApiProperty({
    type: Date,
    nullable: true,
    example: `2024-01-01 00:00:00`,
  })
  deletedAt: Date;
}
