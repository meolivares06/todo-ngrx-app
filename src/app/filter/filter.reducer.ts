import { createReducer, on } from '@ngrx/store';
import { setFilter} from "./filter.actions";

export const enum FILTERS_TYPES {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED'
}

export type ValidFilter = 'ALL' | 'ACTIVE' | 'COMPLETED' ;

export const initialState: ValidFilter = FILTERS_TYPES.ALL;

export const filterReducer = createReducer(
  initialState,

// @ts-ignore
  on(setFilter, (state, {filter }) => filter )
);
