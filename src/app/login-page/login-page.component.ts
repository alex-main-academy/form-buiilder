import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

  form!: FormGroup
  form2!: FormGroup
  register = false

  isSignIn = false

  constructor(public router: Router,
              public auth: AuthService,
              public route: ActivatedRoute,
              public http: HttpClient,
              public fbService: AuthService) {}

  ngOnInit() {
    if (localStorage.getItem('user')!=null) {
      this.isSignIn = true
    }else{
      this.isSignIn = false
    }

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })

    this.form2 = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }



  signUp(){
    this.register = !this.register
    this.form2.reset()
  }

  async onSignUp(email: string, password: string) {
    await this.fbService.signup(email, password)
    if(this.fbService.isLoggedIn) {
      this.isSignIn = true
    }
  }

  async onSignIn(email: string, password: string) {
    await this.fbService.signin(email, password)
    if(this.fbService.isLoggedIn) {
      this.isSignIn = true
    }
    console.log('signIn')
    this.router.navigate(['builder'])
  }


}
