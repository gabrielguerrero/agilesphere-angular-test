import { Action } from '@ngrx/store';
import * as model from '../../models';
export const SEARCH = '[Weather] Search';
export const SEARCH_SUCCESS = '[Weather] Search Success';
export const SEARCH_FAIL = '[Weather] Search Fail';

export class SearchAction implements Action {
  readonly type = SEARCH;
  constructor(public query: string) {}
}

export class SearchSuccessAction implements Action {
  readonly type = SEARCH_SUCCESS;
  constructor(public results: model.CityWeather) {}
}

export class SearchFailAction implements Action {
  readonly type = SEARCH_FAIL;
  constructor(public reason: string) {}
}

export type Actions = SearchAction | SearchSuccessAction | SearchFailAction;
