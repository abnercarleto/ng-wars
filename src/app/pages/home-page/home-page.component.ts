import { Component } from '@angular/core';
import { IPerson } from '../../core/models/iperson';
import { PersonComponent } from '../../components/person/person.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PersonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  personExample: IPerson = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hairColor: 'blond',
    skinColor: 'fair',
    eyeColor: 'blue',
    birthYear: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: [
      'https://swapi.dev/api/vehicles/14/',
      'https://swapi.dev/api/vehicles/30/',
    ],
    starships: [
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/22/',
    ],
    url: 'https://swapi.dev/api/people/1/',
  };
}
