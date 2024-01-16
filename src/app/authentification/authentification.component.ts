import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  username: string = '';
  password: string = '';
  isLogin: boolean = true;
  erroMessage: string = "";
  constructor(private router: Router,private http: HttpClient) {}
  login() {
    console.log(this.username);
    console.log(this.password);
    let bodyData = {
      username: this.username,
      password: this.password,
    };
        ;
    }
}