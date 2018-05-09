import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Http, Headers} from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http1: HttpClient, private http2: Http) {
  }


  login(user) {
    const body = new URLSearchParams();
    body.set('username', user.username);
    body.set('password', user.password);
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http1.post('http://localhost:5000/rest/user/login', body.toString(), options);
  }

  register(user) {
    const body = new URLSearchParams();
    body.set('username', user.username);
    body.set('password', user.password);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http2.post('http://localhost:5000/rest/user/register', body.toString(), {headers: headers});

  }

}
