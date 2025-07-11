import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Page1 } from './pages/page-1/page-1';
import { Page2 } from './pages/page-2/page-2';
import { Page3 } from './pages/page-3/page-3';
import { Page11 } from './pages/page-11/page-11';
import { Page12 } from './pages/page-12/page-12';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'page-1', component: Page1 },
      { path: 'page-2', component: Page2 },
      { path: 'page-3', component: Page3 },
      { path: 'page-11', component: Page11 },
      { path: 'page-12', component: Page12 },
      { path: '', redirectTo: 'page-1', pathMatch: 'full' },
    ],
  },
];
