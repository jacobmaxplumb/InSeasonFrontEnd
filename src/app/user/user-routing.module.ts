import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { AuthGaurd } from '../__gaurds/auth.gaurd';


const userRoutes: Route[] = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGaurd]}
]

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }