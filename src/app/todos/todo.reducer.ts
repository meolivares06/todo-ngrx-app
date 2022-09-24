import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import {borrar, borrarCompletados, crear, editar, toggle, toggleAll} from './todo.actions';

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
  on(editar, (state, {id, texto}) => {

    return state.map(todo => {
      if(todo.id === id) {
        return {...todo, texto: texto}
      }else {
        return todo;
      }
    });
  }),
  on(borrar, (state, {id}) => {
    return state.filter( todo => todo.id !== id);
  }),
  on(toggleAll, (state, {completado}) => {

    return state.map( todo => {
      return {
        ...todo, completado: completado
      }
    });
  }),
  on(borrarCompletados, (state) => {
    return state.filter( todo => !todo.completado);
  })
)
