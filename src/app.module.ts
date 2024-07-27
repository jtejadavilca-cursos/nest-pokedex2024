import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { PokemonController } from './pokemon/pokemon.controller';
import { PokemonService } from './pokemon/pokemon.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      //
      'mongodb://root:rootpassword@localhost:27018/nest_pokedex?authSource=admin&readPreference=primary'
    ),
    PokemonModule,
    SeedModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
