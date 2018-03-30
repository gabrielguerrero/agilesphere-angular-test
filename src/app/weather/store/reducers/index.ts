import * as reducer from './search.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface WeatherState {
  search: reducer.State;
}
export const reducers: ActionReducerMap<WeatherState> = {
  search: reducer.reducer,
};
