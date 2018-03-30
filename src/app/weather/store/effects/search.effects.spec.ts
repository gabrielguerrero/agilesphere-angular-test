import { SearchEffects, transform } from './search.effects';
import { weather } from '../actions';
import { TestBed } from '@angular/core/testing';
import { instance, mock, reset, verify, when } from 'ts-mockito';
import { WeatherApiService } from '../../services/weather-api/weather-api.service';
import { Action } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { cityWeatherMock, weatherApiResponseMock } from '../mocks/index';

describe('Test Search', function () {
  let actions$: Observable<Action>;
  let effects: SearchEffects;
  const weatherApiServiceMock = mock(WeatherApiService);

  beforeEach(() => {
    TestBed.configureTestingModule({
          providers: [
            SearchEffects,
            provideMockActions(() => actions$),
            { provide: WeatherApiService, useFactory: () => instance(weatherApiServiceMock) }
          ]
        });

        effects = TestBed.get(SearchEffects);
    reset(weatherApiServiceMock);
  });


  describe('weather.SEARCH action ', () => {
    it('test when search is successful correct action gets fired and correct service method is called', () => {
      actions$ = hot('a', { a: new weather.SearchAction('Caracas') });
      const expected = cold('b', { b: new weather.SearchSuccessAction(cityWeatherMock) });
      when(weatherApiServiceMock.searchWeatherForCity('Caracas')).thenReturn(of(weatherApiResponseMock));
      expect(effects.search$).toBeObservable(expected);
      verify(weatherApiServiceMock.searchWeatherForCity('Caracas')).once();
    });
    it('test when search is fail correct action gets fired and correct service method is called', () => {
       actions$ = hot('a', { a: new weather.SearchAction('Caracas') });
       const expected = cold('b', { b: new weather.SearchFailAction('Error on api') });
       when(weatherApiServiceMock.searchWeatherForCity('Caracas')).thenReturn(throwError(new Error('500')));
       expect(effects.search$).toBeObservable(expected);
       verify(weatherApiServiceMock.searchWeatherForCity('Caracas')).once();
    });
  });
  describe('test transform', () => {
    it('ensure transform process response correctly ', () => {
      const result = transform(weatherApiResponseMock);
      expect(result).toEqual(cityWeatherMock);
    });
  });
});
