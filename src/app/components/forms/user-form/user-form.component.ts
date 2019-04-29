import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userName: string;
  userEmail: string;

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  submitData() {
    this.userService.addUser(this.userName, this.userEmail).subscribe((res) => {
      console.log(res);
    })
  }

}
