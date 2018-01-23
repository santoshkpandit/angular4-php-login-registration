import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent }  from './app.component';
import { routing }        from './app-routing.module';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';



import { HeroesComponent } from './heroes/heroes.component';
import { AboutComponent } from './about/about.component';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent }      from './register/register.component';
import { LoginComponent }      from './login/login.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    AboutComponent,
    BackendComponent,
    FrontendComponent,
    MenuComponent,
     AlertComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent

  ],
  imports: [
     BrowserModule,
        FormsModule,
        HttpClientModule,
        routing
  ],
     providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
