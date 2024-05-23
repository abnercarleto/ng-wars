import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IManyResult } from './models/imany-result';
import { IPersonResult } from './models/iperson-result';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private static readonly basePath = 'https://swapi.dev/api';
  private static readonly peoplePath = `${SwapiService.basePath}/people`;

  constructor(private http: HttpClient) {}

  getPeople(): Observable<IManyResult<IPersonResult>> {
    return this.http.get<IManyResult<IPersonResult>>(SwapiService.peoplePath);
  }

  getPersonById(id: number): Observable<IPersonResult> {
    return this.http.get<IPersonResult>(`${SwapiService.peoplePath}/${id}`)
  }
}
