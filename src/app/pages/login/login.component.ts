import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email;
password;
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
login(){
this.auth.login(this.email,this.password).then(res=>{
  console.log("loged in");
})
}
}
