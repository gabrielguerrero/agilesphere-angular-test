import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Weather } from './weather-api.interfaces';

@Injectable()
export class WeatherApiService {
  private url = 'https://api.openweathermap.org/data/2.5/forecast';
  private params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: '010721642521f31b0fbc8c3831d45951'
  };

  constructor(private http: HttpClient) {}

  searchWeatherForCity(city): Observable<Weather> {
    return this.http.get<Weather>(this.url, { params: { ...this.params, q: city } });
  }
}
