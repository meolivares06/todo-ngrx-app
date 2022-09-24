import {createAction, props} from "@ngrx/store";
import {ValidFilter} from "./filter.reducer";

export const setFilter = createAction(
  '[Filter] Set filter',
  props<{ filter: ValidFilter }>()
);
