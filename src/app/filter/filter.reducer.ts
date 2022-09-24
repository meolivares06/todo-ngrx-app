import { createReducer, on } from '@ngrx/store';
import { setFilter} from "./filter.actions";

export const enum FILTERS_TYPES {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED'
}

export type Filter = 'ALL' | 'ACTIVE' | 'COMPLETED' ;

export const initialState: Filter = 'ALL';

export const filterReducer = createReducer(
  initialState,

// @ts-ignore
  on(setFilter, (state, {filter }) => filter )
);
