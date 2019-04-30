import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/__services/auth.service';
import { User } from 'src/app/__models/user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'user-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    showLogin: boolean = true;
    in: string = 'active';
    out: string = 'inactive underlineHover';

    loginForm: FormGroup = new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
    })

    signupForm: FormGroup = new FormGroup({
        email: new FormControl(null, Validators.required),
        name: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
        confirmPassword: new FormControl(null, Validators.required)
    })

    constructor(private authService: AuthService, private router: Router) { }

    loginClicked() {
        this.showLogin = true;
        this.in = 'active';
        this.out = 'inactive underlineHover';
    }

    signupClicked() {
        this.showLogin = false;
        this.out = 'active';
        this.in = 'inactive underlineHover';
    }

    loginSubmitted() {
        this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value);
        if (this.authService.user) {
            if (this.authService.isAuthorized()) {
                this.router.navigate(['users', 'profile']);
            }
        } else {
            alert('Wrong combo of email and password');
        }
        
    }

    signupSubmitted() {
        if (this.signupForm.controls.password.value !== this.signupForm.controls.confirmPassword) {
            alert('Passwords dont match');
        } else {
            const newUser: User = {
                email: this.signupForm.controls.email.value,
                name: this.signupForm.controls.name.value,
                password: this.signupForm.controls.password.value
            };
            this.authService.addUser(newUser);
            this.loginClicked();
        }
        
    }

}