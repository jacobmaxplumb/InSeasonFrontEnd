import { Injectable } from "@angular/core";
import { User } from '../__models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    mockData: User[] = [
        {name: "Jacob", email: "jacobmaxplumb@gmail.com", password: 'Jake123123'},
        {name: "James", email: "james@gmail.com", password: 'Jake123123'}
    ];

    user: User;
    
    isAuthorized() {
        if (this.user) {
            return true;
        }
    }

    login(email: string, password: string) {
        let foundUser = this.mockData.find(user => user.email === email);
        if (foundUser.password === password) {
            this.user = foundUser
        }
    }

    logout() {
        this.user = undefined;
    }

    addUser(newUser: User) {
        this.mockData.push(newUser);
    }
}