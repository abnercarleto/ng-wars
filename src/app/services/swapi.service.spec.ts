import { first, of } from 'rxjs';
import { SwapiService } from './swapi.service';
import { HttpClient } from '@angular/common/http';
import { IManyResult } from './models/imany-result';
import { IPersonResult } from './models/iperson-result';
import { IResourceUrlsResult } from './models/iresource-urls-result';

describe('SwapiService', () => {
  let service: SwapiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SwapiService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get resource urls', (done: DoneFn) => {
    const expectedData: IResourceUrlsResult = {
      people: 'https://swapi.dev/api/people/',
      planets: 'https://swapi.dev/api/planets/',
      films: 'https://swapi.dev/api/films/',
      species: 'https://swapi.dev/api/species/',
      vehicles: 'https://swapi.dev/api/vehicles/',
      starships: 'https://swapi.dev/api/starships/',
    };

    httpClientSpy.get.and.returnValue(of(expectedData));

    service.getResourceUrls().subscribe({
      next: (data) => {
        expect(data).toBeTruthy();
        expect(data.people).toEqual(expectedData.people);
        expect(data.planets).toEqual(expectedData.planets);
        expect(data.films).toEqual(expectedData.films);
        expect(data.species).toEqual(expectedData.species);
        expect(data.vehicles).toEqual(expectedData.vehicles);
        expect(data.starships).toEqual(expectedData.starships);
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('shoudl get people', (done: DoneFn) => {
    const expectedData: IManyResult<IPersonResult> = {
      count: 1,
      next: 'https://swapi.dev/api/people/?page=2',
      previous: null,
      results: [
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
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
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
          url: 'https://swapi.dev/api/people/1/',
        },
      ],
    };

    httpClientSpy.get.and.returnValue(of(expectedData));

    service.getPeople('https://swapi.dev/api/people/').subscribe({
      next: (data) => {
        expect(data).toBeTruthy();
        expect(data.count).toEqual(expectedData.count);
        expect(data.next).toEqual(expectedData.next);
        expect(data.previous).toBeNull();
        expect(data.results.length).toEqual(1);

        const firstResult = data.results[0];
        const expectedFirstData = expectedData.results[0];
        expect(firstResult.name).toEqual(expectedFirstData.name);
        expect(firstResult.height).toEqual(expectedFirstData.height);
        expect(firstResult.mass).toEqual(expectedFirstData.mass);
        expect(firstResult.hair_color).toEqual(expectedFirstData.hair_color);
        expect(firstResult.skin_color).toEqual(expectedFirstData.skin_color);
        expect(firstResult.eye_color).toEqual(expectedFirstData.eye_color);
        expect(firstResult.birth_year).toEqual(expectedFirstData.birth_year);
        expect(firstResult.gender).toEqual(expectedFirstData.gender);
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('should get person by id', (done: DoneFn) => {
    const expectedData: IPersonResult = {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
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
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
          url: 'https://swapi.dev/api/people/1/',
        };

    httpClientSpy.get.and.returnValue(of(expectedData));

    service.getPersonById(1, 'https://swapi.dev/api/people/').subscribe({
      next: (data) => {
        expect(data.name).toEqual(expectedData.name);
        expect(data.height).toEqual(expectedData.height);
        expect(data.mass).toEqual(expectedData.mass);
        expect(data.hair_color).toEqual(expectedData.hair_color);
        expect(data.skin_color).toEqual(expectedData.skin_color);
        expect(data.eye_color).toEqual(expectedData.eye_color);
        expect(data.birth_year).toEqual(expectedData.birth_year);
        expect(data.gender).toEqual(expectedData.gender);
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
