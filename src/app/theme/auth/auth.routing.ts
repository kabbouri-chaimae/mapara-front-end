import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ForgotComponent} from "./forgot/forgot.component";
import {LockScreenComponent} from "./lock-screen/lock-screen.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Authentication',
      status: false
    },
    children: [






      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'forgot', component: ForgotComponent },
      { path: 'lock-screen', component: LockScreenComponent },




    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRouting { }
