import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../models/todo.model";
import {FormControl, Validators} from "@angular/forms";

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

  constructor() {}

  ngOnInit(): void {
    this.chckCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
  }

  editar(): void {
    this.editando = true;

    setTimeout(() => {
      this.inputFisico?.nativeElement?.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
  }
}
