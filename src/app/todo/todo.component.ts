import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { parseHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input({ required: true, transform: numberAttribute })
  id!: number;

  @Input({ required: true })
  content!: string;

  @Input({ transform: booleanAttribute })
  hasFinished!: boolean;
  @Output()
  readonly hasFinishedChange = new EventEmitter();

  @HostBinding('class')
  class = 'app-todo';

  onSetStatus(hasFinished: boolean): void {
    this.hasFinishedChange.emit(hasFinished);
  }
}
