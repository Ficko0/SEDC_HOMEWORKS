import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: String(configService.get('DB_PASSWORD')),
        database: configService.get('DB_NAME'),
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'], istoto go pravi autoLoadEntities bez da se zamarame so pishuvanjevo
        autoLoadEntities: true,
        synchronize: true, // SAMO VO TEST FAZA SE STAVA true, INAKU SEKOGASH E FALSE
      }),
    }),
  ],
})
export class DatabaseModule {}
