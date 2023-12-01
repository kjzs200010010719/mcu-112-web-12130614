import { TaskService } from './services/task.service';
import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JsonPipe } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Todo } from './model/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TodoListComponent, FooterComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  TaskService = inject(TaskService);

  tasks = [new Todo(1, '待辦事項 A'), new Todo(2, '待辦事項 B')];

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
