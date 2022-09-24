import {createAction, props} from "@ngrx/store";
import {Filter} from "./filter.reducer";

export const setFilter = createAction(
  '[Filter] Set filter',
  props<{ filter: Filter }>()
);
