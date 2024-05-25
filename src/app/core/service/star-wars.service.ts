import { Injectable } from '@angular/core';
import { SwapiClientService } from '../../services/swapi-client.service';
import { ResourceStoreService } from './resource-store.service';
import { Resources } from '../models/resources';
import {
  Observable, map, switchMap,
  tap
} from 'rxjs';
import { IResourceUrlsResult } from '../../services/models/iresource-urls-result';
import { PagedResults } from '../models/paged-results';
import { IPerson } from '../models/iperson';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  constructor(
    private readonly swapiClientService: SwapiClientService,
    private readonly resourceStoreService: ResourceStoreService
  ) {}

  findResources(): Observable<Resources> {
    return this.findResourceUrlsAndStore().pipe(
      map(
        (data) =>
          new Resources({
            people: !!data.people,
            planets: !!data.planets,
            films: !!data.films,
            species: !!data.species,
            vehicles: !!data.vehicles,
            starships: !!data.starships,
          })
      )
    );
  }

  findPeople(): Observable<PagedResults<IPerson>> {
    return this.resourceStoreService.peopleUrl
      ? this.findPeopleWithUrl(this.resourceStoreService.peopleUrl)
      : this.findResourceUrlsAndStore().pipe(
          switchMap((_) =>
            this.findPeopleWithUrl(this.resourceStoreService.peopleUrl!)
          )
        );
  }

  findPeopleWithUrl(url: string): Observable<PagedResults<IPerson>> {
    return this.swapiClientService.getPeople(url).pipe(
      map(
        (result) =>
          new PagedResults<IPerson>(
            result.next,
            result.previous,
            result.results.map(
              (result) =>
                new Person({
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
                })
            )
          )
      )
    );
  }

  private findResourceUrlsAndStore(): Observable<IResourceUrlsResult> {
    return this.swapiClientService.getResourceUrls().pipe(
      tap((data) => {
        this.resourceStoreService.storeAllUrl({
          peopleUrl: data.people || null,
          planetsUrl: data.planets || null,
          filmsUrl: data.films || null,
          speciesUrl: data.species || null,
          vehiclesUrl: data.vehicles || null,
          starshipsUrl: data.starships || null,
        });
      })
    );
  }
}
