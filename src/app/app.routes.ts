import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IsLoggedGuad } from './guards/is-logged.guard';
import { IndexComponent } from './components/index/index.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [IsLoggedGuad],
  },
];
