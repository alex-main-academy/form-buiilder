import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";

@Injectable(
)
export class AuthService {

  isLoggedIn = false

  constructor(private http: HttpClient,
              private firebaseAuth: AngularFireAuth,
              public router: Router
  ) {}

  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
      .then(res => {
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }


  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true
        localStorage.setItem('user',JSON.stringify(res.user))
      })
  }

  logout() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
