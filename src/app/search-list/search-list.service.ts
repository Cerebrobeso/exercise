import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {debounceTime, map, switchMap} from 'rxjs';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class SearchListService {
  private http = inject(HttpClient);
  public search$ = signal<string>('');

  private users = this.getUsers();
  public users$ = toSignal(this.users);


  constructor() { }

  private getUsers() {
    return toObservable(this.search$).pipe(
      debounceTime(200),
      map(search => search.toLowerCase()),
      switchMap(search => this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users?q=${search}`).pipe(
        map(users => users.map(user => ({id: user.id, name: user.name, username: user.username, email: user.email})))
      ))
    )
  }

  public setSearch(query: string) {
    this.search$.set(query);
  }
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
