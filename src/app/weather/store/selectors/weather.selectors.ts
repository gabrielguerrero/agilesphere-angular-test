import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as reducer from '../reducers';

export const getWeatherState = createFeatureSelector<reducer.WeatherState>('weather');
export const getSearchState = createSelector(getWeatherState, state => state.search);

export const getSearchResults = createSelector(getSearchState, state => state.results);
export const isLoading = createSelector(getSearchState, state => state.loading);
export const getError = createSelector(getSearchState, state => state.error);
