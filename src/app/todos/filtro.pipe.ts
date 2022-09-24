import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from "./models/todo.model";
import {ValidFilter} from "../filter/filter.reducer";

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Todo[], filtro: ValidFilter): Todo[] {
    switch (filtro) {
      case "COMPLETED":
        return value.filter(todo => todo.completado);
      case "ALL":
        return value;
      case "ACTIVE":
        return value.filter(todo => !todo.completado);
    }
  }

}
