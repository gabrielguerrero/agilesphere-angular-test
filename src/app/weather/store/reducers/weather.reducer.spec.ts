import { weather } from '../actions';
import {
  initialState,
  reducer,
  State,
} from './search.reducer';

const stateFixture = Object.freeze(<State>{
  ...initialState,
  loading: false,
  error: undefined
});

describe('Search Reducer', () => {
  it('undefined action should return the default state', () => {
    const action = {} as any;

    const result = reducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  it('SEARCH action should set loading to true and clear errors', () => {
    const action = new weather.SearchAction('Caracas');

    const result = reducer(stateFixture, action);

    expect(result).toEqual({
      ...stateFixture,
      loading: true,
      error: undefined
    });
  });

  it('SEARCH_SUCCESS action should store wather info ', () => {
    const results = { city: 'Caracas', forecast: [{ date: '12 PM', temperature: 25 }] };
    const action = new weather.SearchSuccessAction(results);

    const result = reducer(stateFixture, action);

    expect(result).toEqual({
      ...stateFixture,
      results: results,
      loading: false,
      error: undefined
    });
  });

  it('SEARCH_FAIL action should store error info ', () => {
    const action = new weather.SearchFailAction('error');

    const result = reducer(stateFixture, action);

    expect(result).toEqual({
      ...stateFixture,
      error: 'error',
      loading: false,
    });
  });
});
