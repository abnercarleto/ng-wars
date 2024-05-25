export class Resources {
  people: boolean = false;
  planets: boolean = false;
  films: boolean = false;
  species: boolean = false;
  vehicles: boolean = false;
  starships: boolean = false;

  public constructor({
    people = false,
    planets = false,
    films = false,
    species = false,
    vehicles = false,
    starships = false,
  }: {
    people?: boolean,
    planets?: boolean,
    films?: boolean,
    species?: boolean,
    vehicles?: boolean,
    starships?: boolean,
  }) {
    this.people = people;
    this.planets = planets;
    this.films = films;
    this.species = species;
    this.vehicles = vehicles;
    this.starships = starships;
  }
}
