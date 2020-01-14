import { Component, OnInit } from '@angular/core';
import { UserService } from '@services/user.service';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario: string;
  public pwd: string;

  constructor(
    public _user: UserService,
    private api: ApiService
  ) { }

  ngOnInit() {
  }
  login() {
    const user = this.usuario;
    const pwd = this.pwd;

    this.api.login(user, pwd).subscribe(response => {
      if (response.success) {
        this._user.user = response.user;
      }
    });
  }
}
