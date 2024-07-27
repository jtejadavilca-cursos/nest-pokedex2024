import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from "@nestjs/mongoose";

import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';
import { CommonModule } from './common/common.module';
import { EnvConfiguration } from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot(({
      load: [EnvConfiguration],
      isGlobal: true 
    })),
    MongooseModule.forRoot( process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
    } ),
    PokemonModule,
    SeedModule,
    CommonModule,
  ],
  controllers: [],
  providers: [
    ConfigService
  ],
})
export class AppModule {}
