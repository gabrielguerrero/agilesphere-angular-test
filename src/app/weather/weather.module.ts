import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainerComponent } from './weather.container';
import { WeatherApiService } from './services/weather-api/weather-api.service';
import { reducers, effects } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';

// done this way to easy use in test
export const weatherStore = StoreModule.forFeature('weather', reducers);

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    weatherStore,
    EffectsModule.forFeature(effects),
    ComponentsModule
  ],
  declarations: [WeatherContainerComponent],
  providers: [WeatherApiService]
})
export class WeatherModule {}
