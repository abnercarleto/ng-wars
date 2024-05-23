import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IManyResult } from './models/imany-result';
import { IPersonResult } from './models/iperson-result';
import { IResourceUrlsResult } from './models/iresource-urls-result';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private static readonly basePath = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getResourceUrls(): Observable<IResourceUrlsResult> {
    return this.http.get<IResourceUrlsResult>(SwapiService.basePath);
  }

  getPeople(peopleUrl: string): Observable<IManyResult<IPersonResult>> {
    return this.http.get<IManyResult<IPersonResult>>(peopleUrl);
  }

  getPersonById(id: number, peopleUrl: string): Observable<IPersonResult> {
    return this.http.get<IPersonResult>(`${peopleUrl}${id}`);
  }
}
