import { Component, OnInit, ViewChild } from "@angular/core"
import { wrappedError } from '@angular/core/src/error_handler';

@Component({
    selector: 'shared-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    show: boolean

    ngOnInit() {
        this.show = true;
    }

    toggleSide() {
        this.show = !this.show;
    }
}