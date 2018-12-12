import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthenticationProvider {

  constructor() {
  }
signup(email:string,passsword:string){
return firebase.auth().createUserWithEmailAndPassword("nsalvi@mobiquityinc.com","1234567890");
}

signin(email:string,passsword:string){
  return firebase.auth().signInWithEmailAndPassword(email,passsword);
}
}
