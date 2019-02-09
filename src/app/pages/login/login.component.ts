import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email;
password;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }
login(){
this.auth.login(this.email,this.password).then(res=>{
  console.log("loged in");
  this.router.navigate(['/dashboard]']);
  
})
}
}
