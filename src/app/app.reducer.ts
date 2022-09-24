import { Todo } from "./todos/models/todo.model";
import {Filter, filterReducer} from "./filter/filter.reducer";
import {ActionReducerMap} from "@ngrx/store";
import {todoReducer} from "./todos/todo.reducer";

export interface AppState {
  todos: Todo[];
  filter: Filter;
}

export const appReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
// @ts-ignore
  filter: filterReducer
}
