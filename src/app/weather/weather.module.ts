import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainerComponent } from './weather.container';
import { WeatherApiService } from './services/weather-api/weather-api.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { reducers, effects } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('weather', reducers),
    EffectsModule.forFeature(effects),
    ComponentsModule
  ],
  declarations: [WeatherContainerComponent],
  providers: [WeatherApiService]
})
export class WeatherModule {}
