import { City } from 'src/cities/entities/city.entity';

export class Country {
  id: number;
  name: string;
  cities: City[];
}
