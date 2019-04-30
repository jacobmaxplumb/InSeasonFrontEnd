import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        ProfileComponent
    ],
    providers: [],
    exports: []
})
export class UserModule { }