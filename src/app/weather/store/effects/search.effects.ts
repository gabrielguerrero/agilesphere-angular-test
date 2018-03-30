import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { weather } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as api from '../../services/weather-api';
import * as model from '../../models';

@Injectable()
export class SearchEffects {
  @Effect()
  search$ = this.actions.pipe(
    ofType(weather.SEARCH),
    map((action: weather.SearchAction) => action.query),
    switchMap(query =>
      this.service.searchWeatherForCity(query).pipe(
        map(response => transform(response)),
        map(results => new weather.SearchSuccessAction(results)),
        catchError(err => of(new weather.SearchFailAction('Error on api')))
      )
    )
  );

  constructor(public actions: Actions, private service: api.WeatherApiService) {}
}

export function transform(response: api.Weather): model.CityWeather {
  let count = 0;
  return {
    city: response.city.name,
    forecast: response.list
      .map(item => ({ date: item.dt_txt, temperature: item.main.temp }))
      .filter(() => {
        const include = count % 2 === 0;
        count++;
        return include;
      })
  };
}
