import { IPerson } from './iperson';

export class Person implements IPerson {
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: string;
  mass: string;
  name: string;
  skinColor: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;

  public constructor({
    birthYear,
    eyeColor,
    gender,
    hairColor,
    height,
    mass,
    name,
    skinColor,
    homeworld,
    films,
    species,
    vehicles,
    starships,
    url,
  }: IPerson) {
    this.birthYear = birthYear;
    this.eyeColor = eyeColor;
    this.gender = gender;
    this.hairColor = hairColor;
    this.height = height;
    this.mass = mass;
    this.name = name;
    this.skinColor = skinColor;
    this.homeworld = homeworld;
    this.films = films;
    this.species = species;
    this.vehicles = vehicles;
    this.starships = starships;
    this.url = url;
  }
}
