import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudModule } from './crud/crud.module';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, FirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatBoxRoutingModule } from './modules/chat-box/chat-box-routing.module';
import { ChatBoxModule } from './modules/chat-box/chat-box.module';
import { ChatPanelComponent } from './modules/chat-box/chat-panel/chat-panel.component';
import { WelcomeComponent } from './modules/welcome/welcome/welcome.component';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoFlexyModule } from './demo-flexy-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    DemoFlexyModule
    // ReactiveFormsModule,
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideFirestore(() => getFirestore()),
    // FirestoreModule,
    // ChatBoxModule,
    // WelcomeModule,
    // AuthModule
    // ChatBoxRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
