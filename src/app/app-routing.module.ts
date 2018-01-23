import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { AboutComponent }      from './about/about.component';
import { BackendComponent }      from './backend/backend.component';
import { FrontendComponent }      from './frontend/frontend.component';
import { RegisterComponent }      from './register/register.component';
import { LoginComponent }      from './login/login.component';
import { UserComponent }      from './user/user.component';


import { AuthGuard } from './_guards/index';

const appRoutes: Routes=[
 {
        path:'',
        component:FrontendComponent
        },
        {
        path:'login',
        component:LoginComponent
        },
        { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
        {
        path:'register',
        component:RegisterComponent
        },
        {
        path:'about',
        component:AboutComponent
        },
        {
		    path: 'admin',
		    component: BackendComponent,
		    children: [
              {
                path: 'dashboard',
                loadChildren: './admin/dashboard/dashboard.module#DashboardModule'
              },
               {
                path: 'users',
                loadChildren: './admin/users/users.module#UsersModule'
              }
		      ]
	   },
     // otherwise redirect to home
    { path: '**', redirectTo: '' }
                                                   
    ];




@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = RouterModule.forRoot(appRoutes);
