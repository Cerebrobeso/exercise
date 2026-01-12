import {Component, signal} from '@angular/core';
import {OnPushChild} from './on-push-child/on-push-child';
import {HlmButton} from '@spartan-ng/helm/button';

@Component({
  selector: 'app-on-push-parent',
  imports: [
    OnPushChild,
    HlmButton
  ],
  templateUrl: './on-push-parent.html',
  styleUrl: './on-push-parent.css',
})
export class OnPushParent {
  usersPush: { username: string }[] = [{username: 'Utente 1'}];
  usersReassign: { username: string }[] = [{username: 'Utente 1'}];
  users$ = signal([{username: 'Utente 1'}]);

  constructor() {
  }

  addUserPush() {
    // ERRORE COMUNE: Mutare l'array esistente
    this.usersPush.push({username: 'Nuovo Utente' + (this.usersPush.length + 1)});
  }

  addUserReassign() {
    // CORRETTO
    this.usersReassign = [...this.usersReassign, {username: 'Nuovo Utente' + (this.usersReassign.length + 1)}];
  }

  addUserSignal() {//   Con signal
    this.users$.update(users => ([...users, {username: 'Nuovo Utente' + (users.length + 1)}]))
  }
}
