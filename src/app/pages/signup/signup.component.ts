import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
name;
email;
password;
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
signup(){
this.auth.signup(this.email,this.password).then(res=>{
  console.log("userCreated");
})
}
}
