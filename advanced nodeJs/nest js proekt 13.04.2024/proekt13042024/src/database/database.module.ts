import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123123123',
      database: 'football_manager',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, // SAMO VO TEST FAZA SE STAVA true, INAKU SEKOGASH E FALSE
    }),
  ],
})
export class DatabaseModule {}
