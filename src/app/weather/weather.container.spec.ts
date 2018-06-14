import { async, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  createWrapper,
  WrapperComponent,
  WrapperFixture
} from '../components/testing/wrapper.component';
import { ResultsComponent } from './components/results/results.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherContainerComponent } from './weather.container';
import { Store, StoreModule } from '@ngrx/store';
import { weatherStore } from './weather.module';
import { WeatherState } from './store';
import { SearchSuccessAction } from './store/actions/weather.actions';
import { cityWeatherMock } from './store/mocks/index';
import { spy, verify } from 'ts-mockito';

describe('WeatherContainerComponent', () => {
  let wrapperFixture: WrapperFixture;
  let store: Store<WeatherState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeatherContainerComponent,
        SearchComponent,
        ResultsComponent,
        WrapperComponent
      ],
      imports: [ReactiveFormsModule, CommonModule, StoreModule.forRoot({}), weatherStore]
    });
    wrapperFixture = createWrapper('<app-weather></app-weather>');
    store = TestBed.get(Store);
  }));

  it('ensure results component is correctly bound', () => {
      store.dispatch(new SearchSuccessAction( cityWeatherMock));
      const resultsComponent = wrapperFixture.getComponent(ResultsComponent);
      wrapperFixture.detectChanges();
      expect(resultsComponent.weather).toEqual(cityWeatherMock);
  });
  it('ensure search component is correctly bound', () => {
      const searchComponent = wrapperFixture.getComponent(SearchComponent);
      const weatherContainerComponentSpy = spy(wrapperFixture.getComponent(WeatherContainerComponent));
      searchComponent.search.emit('Caracas');
      verify(weatherContainerComponentSpy.citySearch('Caracas')).once();
      // next line is to make jasmmine happy because cant detect test done by verify
      expect().nothing();
  });
});
