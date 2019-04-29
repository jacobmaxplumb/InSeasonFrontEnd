import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    declarations: [
        LoginComponent,
        SignupComponent,
        ProfileComponent
    ],
    providers: [],
    exports: []
})
export class UserModule { }