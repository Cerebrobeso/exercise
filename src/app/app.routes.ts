import { Routes } from '@angular/router';
import { SearchList } from './search-list/search-list';
import { Timer } from './timer/timer';
import {Exercise} from './exercise/exercise';
import {OnPushParent} from './on-push-parent/on-push-parent';

export const routes: Routes = [
  {
    path: 'search-list',
    component: SearchList,
  },
  {
    path: 'timer',
    component: Timer,
  },
  {
    path: 'exercise',
    component: Exercise,
  },
  {
    path: 'on-push',
    component: OnPushParent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/search-list',
  },
];
