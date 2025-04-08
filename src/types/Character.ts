import { Location } from "./Location";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export interface CharacterDetails extends Character, Location {
  gender: string;
  origin: Location;
  location: Location;
  latest_air_date: string;
}