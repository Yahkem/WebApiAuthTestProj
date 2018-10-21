import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeForLoginComponent } from './home-for-login/home-for-login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home-for-login', component: HomeForLoginComponent, canActivate: [AuthGuard] },

  // default route
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
