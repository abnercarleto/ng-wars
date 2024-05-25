import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResourceStoreService {
  peopleUrl: string | null = null;
  planetsUrl: string | null = null;
  filmsUrl: string | null = null;
  speciesUrl: string | null = null;
  vehiclesUrl: string | null = null;
  starshipsUrl: string | null = null;

  constructor() {}

  storeAllUrl({
    peopleUrl = null,
    planetsUrl = null,
    filmsUrl = null,
    speciesUrl = null,
    vehiclesUrl = null,
    starshipsUrl = null,
  }: {
    peopleUrl: string | null;
    planetsUrl: string | null;
    filmsUrl: string | null;
    speciesUrl: string | null;
    vehiclesUrl: string | null;
    starshipsUrl: string | null;
  }) {
    this.peopleUrl = peopleUrl;
    this.planetsUrl = planetsUrl;
    this.filmsUrl = filmsUrl;
    this.speciesUrl = speciesUrl;
    this.vehiclesUrl = vehiclesUrl;
    this.starshipsUrl = starshipsUrl;
  }
}
