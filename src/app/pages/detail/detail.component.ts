import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { concatMap, of, tap } from 'rxjs';


// TODO: move this interface to its own file
interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  params$: ActivatedRoute['params'];
  weatherData$ = of<WeatherResponse|null>(null);

  constructor(route: ActivatedRoute,  private http: HttpClient) {
    this.params$ = route.params;
  }

  ngOnInit() {
    this.weatherData$ = this.params$
      .pipe(
        // TODO: move APPID to config and move the API call to service
        concatMap(params => this.http.get<WeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?q=${params['id']}&APPID=794ee95e63c5a32aaf88cd813fa2e425`)),
        // TODO: remove this log
        tap(result => console.log(result))
      );
  }

}
