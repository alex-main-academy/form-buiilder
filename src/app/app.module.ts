import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BuilderPageComponent } from './builder-page/builder-page.component';
import {AuthService} from "./auth.service";
import {AngularFireModule} from "@angular/fire";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {PortalModule} from "@angular/cdk/portal";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {SecurePipe} from "./secure.pipe";
import { BuilderFormBlockComponent } from './builder-page/builder-form-block/builder-form-block.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BuilderPageComponent,
    SecurePipe,
    BuilderFormBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBGE2gNozOdExp2aIUnVZjAGe4KMOjoFyU",
      authDomain: "form-builder-c30d0.firebaseapp.com",
      projectId: "form-builder-c30d0",
      storageBucket: "form-builder-c30d0.appspot.com",
      messagingSenderId: "825498553418",
      appId: "1:825498553418:web:cefc602688bfcd9e4baab3"
    }),
    DragDropModule,
    PortalModule,
    ClipboardModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
