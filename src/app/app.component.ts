import {Component} from '@angular/core';
import {UserService} from "./services/user.service";
import {Router} from "@angular/router";
import {IUser} from "./login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentUser: IUser;


  constructor() {
    console.log("App.Componenet:")
    try {
      var currentUser = localStorage.getItem('currentUser')
      console.log("App.Componenet:" + currentUser)
      this.currentUser = JSON.parse(currentUser);
      console.log("App.Componenet:" + this.currentUser.username)
      this.title = this.currentUser.username
    } catch (e) {
      console.log("App.Componenet: No signed in" + e)
      this.title = 'No signed in';
    }

  }

}
