import { Injectable } from '@angular/core';
import { IResourceUrlsResult } from './models/iresource-urls-result';

@Injectable({
  providedIn: 'root',
})
export class ResourceStoreService {
  private _resources?: IResourceUrlsResult;

  constructor() {}

  set resources(value: IResourceUrlsResult) {
    this._resources = value;
  }

  get people(): string | null {
    return this._resources?.people || null;
  }

  get planets(): string | null {
    return this._resources?.planets || null;
  }

  get films(): string | null {
    return this._resources?.films || null;
  }

  get species(): string | null {
    return this._resources?.species || null;
  }

  get vehicles(): string | null {
    return this._resources?.vehicles || null;
  }

  get starships(): string | null {
    return this._resources?.starships || null;
  }
}
