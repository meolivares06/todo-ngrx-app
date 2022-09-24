import {ActionReducerMap} from "@ngrx/store";

import {todoReducer} from "./todos/todo.reducer";
import {ValidFilter, filterReducer} from "./filter/filter.reducer";
import { Todo } from "./todos/models/todo.model";

export interface AppState {
  todos: ReadonlyArray<Todo>;
  filter: ValidFilter;
}

export const appReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
// @ts-ignore
  filter: filterReducer
}
