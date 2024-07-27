import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { HttpAdapter } from 'src/common/interfaces/http-adapter.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from 'src/seed/interfaces/poke-response.interface';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokeResponseModel: Model<Pokemon>,
    @Inject(HttpAdapter)
    private readonly http: HttpAdapter
  ) {}

  async executeSeed() {
    console.log('executeSeed');
    if(!await this.existData()) {
      const totalData = [];

      for (let offset = 0; offset < 100; offset+=10) {
        const dataInsert = [];
        const { results } = await this.http.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
        results.forEach(({name, url}) => {
          const segments = url.split('/');
          const no = +segments[segments.length - 2];
    
          dataInsert.push({no, name});
          
        });
        totalData.push(...dataInsert);
        this.pokeResponseModel.create(dataInsert);
        
      }


      return totalData;
    }
    return 'Data already exist';
  }

  async executeClear() {
    console.log('executeClear');
    if(await this.existData()) {
      const resp = await this.pokeResponseModel.deleteMany({});

      return resp.deletedCount > 0 ? 'Data deleted' : 'Failed to delete data';
    }
    return 'No data to delete';
  }

  private async existData() {
    return (await this.pokeResponseModel.countDocuments({})) > 0;
  }
}
