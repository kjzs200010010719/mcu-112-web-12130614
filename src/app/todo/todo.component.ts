import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { parseHostBindings } from '@angular/compiler';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input({ required: true })
  task!: Todo;

  @Output()
  remove = new EventEmitter<void>();

  @Output()
  readonly stateChange = new EventEmitter<boolean>();

  @HostBinding('class')
  class = 'app-todo';

  onSetStatus(hasFinished: boolean): void {
    this.stateChange.emit(hasFinished);
  }
}
