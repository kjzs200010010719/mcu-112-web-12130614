import { Injectable, inject } from '@angular/core';
import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskRemoteService {
  private readonly url = 'http://localhost:3000/tasks';

  private readonly httpClient = inject(HttpClient);

  getById(id: number): Observable<Todo | undefined> {
    return this.httpClient.get<Todo | undefined>(`${this.url}/${id}`);
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.url);
  }

  add(content: string): void {
    throw new Error('Method not implemented.');
  }

  updateState(id: number, hasFinished: boolean): void {
    throw new Error('Method not implemented.');
  }

  remove(id: number): void {
    throw new Error('Method not implemented.');
  }
}
