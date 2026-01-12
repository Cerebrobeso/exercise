import {ChangeDetectionStrategy, Component, input, Input} from '@angular/core';


@Component({
  selector: 'app-on-push-child',
  imports: [],
  templateUrl: './on-push-child.html',
  styleUrl: './on-push-child.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChild {
  @Input() usersPush: {username: string}[] = [];
  @Input() usersReassign: {username: string}[] = [];

  users$ = input<{username: string}[]>();

}
