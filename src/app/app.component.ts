import { TaskService } from './services/task.service';
import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JsonPipe, NgIf } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Todo } from './model/todo';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    HeaderComponent,
    TodoListComponent,
    TodoDetailComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  TaskService = inject(TaskService);

  tasks: Todo[] = [];

  selectedId?: number;

  ngOnInit(): void {
    this.tasks = this.TaskService.getAll();
  }

  onAdd(): void {
    this.TaskService.add('待辦事項 C');
  }

  onRemove(id: number): void {
    this.TaskService.remove(id);
  }

  onStateChange({ id, state }: { id: number; state: boolean }): void {
    this.TaskService.updateState(id, state);
  }
}
