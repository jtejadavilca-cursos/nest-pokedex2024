import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  executeSeed() {
    return `This action returns all seed`;
  }
}
