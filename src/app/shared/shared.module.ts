import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        NavbarComponent
    ],
    providers: [],
    exports: [
        NavbarComponent
    ]
})
export class UserModule { }