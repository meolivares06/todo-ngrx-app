import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Leer Romanos'),
  new Todo('Leer Marcos'),
  new Todo('Leer Juan'),
  new Todo('Habito de leer y meditar'),
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => {
    state = [...state, new Todo(texto)];
    return state;
  }),
)
