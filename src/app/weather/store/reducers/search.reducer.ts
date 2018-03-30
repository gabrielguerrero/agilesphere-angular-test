import * as actions from '../actions';
import * as model from '../../models';
export interface State {
  results?: model.CityWeather;
  loading?: boolean;
  error?: string;
}

export const initialState: State = {};

export function reducer(state = initialState, action: actions.weather.Actions) {
  switch (action.type) {
    case actions.weather.SEARCH: {
      return { ...state, loading: true, error: undefined };
    }
    case actions.weather.SEARCH_SUCCESS: {
      return { ...state, results: action.results, loading: false, error: undefined };
    }
    case actions.weather.SEARCH_FAIL: {
      return { ...state, loading: false, error: action.reason };
    }
    default: {
      return state;
    }
  }
}

export const getSearchResults = (state: State) => state.results;

export const isLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;
