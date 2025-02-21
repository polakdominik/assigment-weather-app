import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country.model';
import { catchError, map, of } from 'rxjs';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get<{
      error: boolean,
      msg: string,
      data: Country[]
    }>('https://countriesnow.space/api/v0.1/countries') // TODO: move API URL to config
      .pipe(
        map(res => res.data),
        catchError(err => {
          console.error(err); // TODO: add proper logger
          return of([]);
        })
      );
  }
}
