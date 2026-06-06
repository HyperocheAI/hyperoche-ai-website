import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ServicePage } from './pages/service-page/service-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'services/:id', component: ServicePage },
  { path: '**', redirectTo: '' },
];
