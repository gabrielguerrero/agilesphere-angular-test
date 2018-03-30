import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchAction } from './store/actions/weather.actions';
import { WeatherState, selectors } from './store';
import { Observable } from 'rxjs/index';
import { CityWeather } from './models/weather';

@Component({
  selector: 'app-weather',
  template: `
  <app-search (search)="citySearch($event)"></app-search>
  <app-results [weather]="results$ | async"></app-results> `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherContainerComponent implements OnInit {
  results$: Observable<CityWeather>;

  constructor(private store: Store<WeatherState>) {}

  ngOnInit() {
    this.results$ = this.store.select(selectors.getSearchResults);
  }
  citySearch(city) {
    this.store.dispatch(new SearchAction(city));
  }
}
