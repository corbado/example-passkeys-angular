import {NgModule} from '@angular/core';
import {ProfileComponent} from "./profile/profile.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: '**', redirectTo: '/'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
