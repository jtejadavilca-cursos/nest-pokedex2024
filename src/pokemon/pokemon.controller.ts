import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { PokemonService } from './pokemon.service';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Controller('pokemon')
export class PokemonController {

    constructor(private readonly pokemonService: PokemonService) {}

    @Post()
    create(@Body() createPokemonDto: CreatePokemonDto) {
        return this.pokemonService.create(createPokemonDto);
    }
    @Get()
    findAll() {
        return this.pokemonService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.pokemonService.findOne(id);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.pokemonService.delete(id);
    }

    @Put(':term')
    update(@Param('term') term: string, @Body() updatePokemonDto: UpdatePokemonDto) {
        return this.pokemonService.update(term, updatePokemonDto);
    }
}
