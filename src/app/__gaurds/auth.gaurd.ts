import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { AuthService } from '../__services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGaurd implements CanActivate {
    constructor(private authService: AuthService) {}
    canActivate() {
        return this.authService.isAuthorized()
    }
}