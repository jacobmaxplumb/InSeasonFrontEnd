import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[];

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8000/api/users");
  }

  public addUser(name: string, email: string): Observable<User> {
    let body = {name: name, email: email};
    return this.http.post<User>('http://localhost:8000/api/users', body);
  }
}
