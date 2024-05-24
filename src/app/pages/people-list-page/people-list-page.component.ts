import { Component, OnInit } from '@angular/core';
import { SwapiClientService } from '../../services/swapi-client.service';
import { Person } from '../../core/models/person';
import { IManyResult } from '../../services/models/imany-result';
import { IPersonResult } from '../../services/models/iperson-result';
import { map, tap } from 'rxjs';
import { PersonComponent } from '../../components/person/person.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people-list-page',
  standalone: true,
  imports: [PersonComponent, CommonModule],
  templateUrl: './people-list-page.component.html',
  styleUrl: './people-list-page.component.scss',
})
export class PeopleListPageComponent implements OnInit {
  static readonly peopleUrl = 'https://swapi.dev/api/people/';

  people?: Person[];

  public constructor(private swapiService: SwapiClientService) {}

  ngOnInit(): void {
    this.swapiService.getPeople(PeopleListPageComponent.peopleUrl)
      .pipe<IPersonResult[], Person[]>(
        map(data => data.results),
        map(peopleResults => {
          return peopleResults.map((result) => {
            return new Person({
              birthYear: result.birth_year,
              eyeColor: result.eye_color,
              gender: result.gender,
              hairColor: result.hair_color,
              height: result.height,
              mass: result.mass,
              name: result.name,
              skinColor: result.skin_color,
              homeworld: result.homeworld,
              films: result.films,
              species: result.species,
              vehicles: result.vehicles,
              starships: result.starships,
              url: result.url,
            });
          });
        })
      ).subscribe({
      next: (people) => { this.people = people; console.log(people); },
      error: (error) => { console.error(error); }
    });
  }
}
