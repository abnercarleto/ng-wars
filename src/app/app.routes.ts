import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PeopleListPageComponent } from './pages/people-list-page/people-list-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'people',
    component: PeopleListPageComponent,
  },
];
