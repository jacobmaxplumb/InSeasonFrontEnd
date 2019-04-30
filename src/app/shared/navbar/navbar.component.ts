import { Component, OnInit } from "@angular/core"
import { AuthService } from 'src/app/__services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'shared-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    wrapClass: string;

    constructor(
        private authService: AuthService,
        private router: Router
        ) { }

    ngOnInit() {
        this.wrapClass = 'd-flex toggled';
    }

    toggleSide() {
        if (this.authService.isAuthorized()){
            this.wrapClass === 'd-flex toggled' ? this.wrapClass = 'd-flex' : this.wrapClass = 'd-flex toggled';
        }
    }

    logoutClicked() {
        this.authService.logout();
        this.router.navigate(['/users/login']);
    }

    get showButton(): boolean {
        if (this.authService.isAuthorized()){
            return true
        }
    }
}