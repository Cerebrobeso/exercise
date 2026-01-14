import { Routes } from '@angular/router';
import { SearchList } from './search-list/search-list';
import { Timer } from './timer/timer';
import {Exercise} from './exercise/exercise';
import {OnPushParent} from './on-push-parent/on-push-parent';
import {ContentProjection} from './content-projection/content-projection';
import {MemoryLeaks} from './memory-leaks/memory-leaks';
import {Cart} from './cart/cart';
import {ReactIntegration} from './react-integration/react-integration';

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
    path: 'content-projection',
    component: ContentProjection,
  },
  {
    path: 'memory-leaks',
    component: MemoryLeaks,
  },
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: 'react-integration',
    component: ReactIntegration,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/search-list',
  },
];
