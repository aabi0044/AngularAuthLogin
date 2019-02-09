import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) { }
  signup(email,password){
    return this.auth.auth.createUserWithEmailAndPassword(email,password);
  }
  login(email,password){
    return this.auth.auth.signInWithEmailAndPassword(email,password);
  }
  logout(){
    this.auth.auth.signOut();
   
  }
}
