import { Routes } from '@angular/router';
import { SearchList } from './search-list/search-list';
import { Timer } from './timer/timer';

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
    path: '',
    pathMatch: 'full',
    redirectTo: '/search-list',
  },
];
