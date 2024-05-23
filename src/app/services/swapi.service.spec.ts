import { first, of } from 'rxjs';
import { SwapiService } from './swapi.service';
import { HttpClient } from '@angular/common/http';
import { IManyResult } from './models/imany-result';
import { IPersonResult } from './models/iperson-result';

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

    service.getPeople().subscribe({
      next: (data) => {
        expect(data).toBeTruthy();
        expect(data.count).toEqual(1);
        expect(data.next).toBeTruthy();
        expect(data.previous).toBeNull();
        expect(data.results.length).toEqual(data.count);

        const firstResult = data.results[0];
        expect(firstResult.name).toEqual('Luke Skywalker');
        expect(firstResult.height).toEqual('172');
        expect(firstResult.mass).toEqual('77');
        expect(firstResult.hair_color).toEqual('blond');
        expect(firstResult.skin_color).toEqual('fair');
        expect(firstResult.eye_color).toEqual('blue');
        expect(firstResult.birth_year).toEqual('19BBY');
        expect(firstResult.gender).toEqual('male');
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

    service.getPersonById(1).subscribe({
      next: (data) => {
        expect(data.name).toEqual('Luke Skywalker');
        expect(data.height).toEqual('172');
        expect(data.mass).toEqual('77');
        expect(data.hair_color).toEqual('blond');
        expect(data.skin_color).toEqual('fair');
        expect(data.eye_color).toEqual('blue');
        expect(data.birth_year).toEqual('19BBY');
        expect(data.gender).toEqual('male');
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
