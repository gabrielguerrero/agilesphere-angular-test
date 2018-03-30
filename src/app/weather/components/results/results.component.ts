import { Component, OnChanges, ChangeDetectionStrategy, Input } from '@angular/core';
import { CityWeather } from '../../models/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent {
  @Input() weather: CityWeather;

  constructor() {}
}
