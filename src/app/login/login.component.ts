import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: "",
    password: ""
  }

  username
  password

  usernameR
  passwordR
  passwordR2

  constructor(private userService: UserService) {
    this.username = "";
    this.password = "";

    this.usernameR = "";
    this.passwordR = "";
    this.passwordR2 = "";
  }

  ngOnInit() {
  }

  login() {
    console.log(this.user);
    this.userService.login2()
    /*
    this.userService.login(this.user).subscribe(data => {
      console.log("Output from srv--------");
      console.log("Success: " + data);
    }, error => {
      console.log("error:: " + error);
    });
    */


  }

  showRegister() {

  }

  registerUser() {
    this.user.username = this.usernameR
    this.user.password = this.passwordR
    console.log(this.user);
    this.userService.register(this.user).subscribe(data => {
      console.log("Output from srv--------");
      console.log("Success: " + data);
    }, error => {
      console.log("error:: " + error);
    });
  }


}

export interface IUser {
  _id: string;
  username: string;
  password: string;
}
