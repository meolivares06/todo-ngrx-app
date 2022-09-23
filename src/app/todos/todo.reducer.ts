import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import {crear, toggle} from './todo.actions';

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
  on(toggle, (state, {id}) => {

    return state.map(todo => {
      if(todo.id === id) {
        return {...todo, completado: !todo.completado}
      }else {
        return todo;
      }
    });
  }),
)
