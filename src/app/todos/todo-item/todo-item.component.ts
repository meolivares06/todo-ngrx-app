import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../models/todo.model";
import {FormControl, Validators} from "@angular/forms";
import {editar, toggle} from "../todo.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {


  @Input() todo!: Todo;
  editando: boolean = false;

  @ViewChild('inputFisico') inputFisico!: ElementRef;

  chckCompletado!: FormControl;
  txtInput!: FormControl;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.chckCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chckCompletado.valueChanges.subscribe(() => {
      this.store.dispatch(toggle({ id: this.todo.id }))
    });
  }

  editar(): void {
    this.editando = true;

    setTimeout(() => {
      this.inputFisico?.nativeElement?.select();
    }, 1);
  }

  terminarEdicion(): void {
    this.editando = false;
    this.txtInput.setValue(this.todo.texto);
    if(this.txtInput.invalid) return;
    if(this.txtInput.value === this.todo.texto) return;

    this.store.dispatch(editar({
      id: this.todo.id,
      texto: this.txtInput.value
    }));
  }
}
